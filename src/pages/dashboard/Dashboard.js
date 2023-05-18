import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//components
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import RadarScore from "Components/radarScore/RadarScore";
import RadarPerformance from "Components/radarPerformance/RadarPerformance";
import Nutriment from "Components/nutriment/Nutriment";
import LineChartAverage from "Components/lineChart/LineChartAverage";
import { NavLink } from "react-router-dom";

/**
 * @Composant Dashboard représentant le tableau de bord.
 */
const Dashboard = () => {

  
  // Obtient l'ID d'utilisateur à partir de l'URL
  const { userId } = useParams();//useParams() est un Hook qui permet d'extraire les paramètres d'une URL.
  const { isDemo } = useParams();
  console.log("isDemo: ", isDemo);
  // Vérifie si l'application est en mode démo
  const isDemoBooleen = isDemo?.toLocaleLowerCase() === "true";
  //toLocaleLowerCase() est une méthode qui permet de convertir une chaîne de caractères en minuscules.

  let provider = isDemoBooleen ? new ApiMockProvider() : new ApiProvider();

  // Variables d'état pour stocker les données récupérées de l'API

  //useState() est un Hook qui permet d'ajouter l'état local à un composant fonctionnel.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [barChartDto, setBarChartDto] = useState([]);
  const [lineChartDto, setLineChartDto] = useState({});
  const [nutrimentDto, setNutrimentDto] = useState(null);
  const [radarPerformanceDto, setRadarPerformanceDto] = useState(null);
  const [radarScoreDto, setRadarScoreDto] = useState(null);

  /**
   * @Fonction d'effet pour récupérer les données de l'API.
   */
  useEffect(() => {
    /**
     * @Fonction asynchrone pour récupérer les données de l'API.
     */
    async function getData() {
      try {
        // Récupérer les données de l'API en utilisant les fonctions de la classe `provider`
        const firstName = await provider.getUserNameByUserId(userId);
        const lastName = await provider.getUserLastNameByUserId(userId);
        const barChartDto = await provider.getActivitiesByUserId(userId);
        const lineChartDto = await provider.getSessionsByUserId(userId);
        const nutrimentDto = await provider.getNutrimentByUserId(userId);
        const radarPerformanceDto = await provider.getPerformanceByUserId(userId);
        const radarScoreDto = await provider.getScoreByUserId(userId);

        // Met à jour les variables d'état avec les données récupérées
        
        setFirstName(firstName);
        setLastName(lastName);
        setBarChartDto(barChartDto);
        setLineChartDto(lineChartDto);
        setNutrimentDto(nutrimentDto);
        setRadarPerformanceDto(radarPerformanceDto);
        setRadarScoreDto(radarScoreDto);
      } catch (error) {//catch() est une méthode qui permet de gérer les erreurs.
        console.error("Error fetching user data: ", error);
      }
    }

 // Appelle la fonction pour récupérer les données de l'API
    getData();
  }, [userId]);

  return (
    <section className="dashboard">
      <WelcomeMessage firstName={firstName} lastName={lastName} />
      <aside className="dashboard__charts">
        <article className="dashboard__chartsLinear">
          <BarChartWrapper dto={barChartDto} />
          <div className="dashboard__threeGraph">
            <LineChartAverage dto={lineChartDto} />
            {radarPerformanceDto && (
              <RadarPerformance dto={radarPerformanceDto} />
            )}
            {radarScoreDto && <RadarScore dto={radarScoreDto} />}
          </div>
        </article>

        <article className="dashboard__nutrients">
          {nutrimentDto && <Nutriment dto={nutrimentDto} />}
        </article>
      </aside>
    </section>
  );
};

export default Dashboard;
