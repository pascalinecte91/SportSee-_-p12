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

const Dashboard = () => {
  // Obtient l'ID d'utilisateur à partir de l'URL
  const { userId } = useParams();

  // Indique si le mode démo est activé ou non
  let isDemo = false;
  console.log("isDemo: ", isDemo);
  let provider = isDemo ? new ApiMockProvider() : new ApiProvider();
  //console.log(provider);

  //const barChartDto = provider.getActivitiesByUserId(userId);
   // const nutrimentDto = provider.getNutrimentByUserId(userId);

  let nutrimentDto,  radarPerformanceDto, radarScoreDto;
  if (isDemo) {
    nutrimentDto = provider.getNutrimentByUserId(userId);
  
    radarPerformanceDto = provider.getPerformanceByUserId(userId);
    radarScoreDto = provider.getScoreByUserId(userId);
  }
  // stocker le prénom et le nom de l'utilisateur
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [barChartDto, setBarChartDto] = useState([]);
  const [lineChartDto, setLineChartDto] = useState({});
  

  // pour executer le code 
  useEffect(() => {
    async function getData() {
   
      // attendre que la fonction asynchrone soit terminée
      let firstName = await provider.getUserNameByUserId(userId);
      let lastName = await provider.getUserLastNameByUserId(userId);
      let barChartDto = await provider.getActivitiesByUserId(userId);
      let lineChartDto = await provider.getSessionsByUserId(userId);
     
      setFirstName(firstName);
      setLastName(lastName);
      setBarChartDto(barChartDto);
      setLineChartDto(lineChartDto);
     
    }
    // appel de la fonction getData
    getData();
   
    
  }, [userId]);// useEffect doit etre execute à chaque fois que userId change

  return (
    <section className="dashboard">
      <WelcomeMessage firstName={firstName} lastName={lastName} />
      <aside className="dashboard__charts">
        <article className="dashboard__chartsLinear">
          <BarChartWrapper dto={barChartDto} />
          <div className="dashboard__threeGraph">
             <LineChartAverage dto={lineChartDto} />
            {isDemo && <RadarPerformance dto={radarPerformanceDto} />}
            {isDemo && <RadarScore dto={radarScoreDto} />}
          </div>
        </article>

        <article className="dashboard__nutrients">
          {isDemo && <Nutriment dto={nutrimentDto} />}
        </article>
      </aside>
    </section>
  );
};

export default Dashboard;
