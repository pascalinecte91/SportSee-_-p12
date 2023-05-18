import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import RadarScore from "Components/radarScore/RadarScore";
import RadarPerformance from "Components/radarPerformance/RadarPerformance";
import Nutriment from "Components/nutriment/Nutriment";
import LineChartAverage from "Components/lineChart/LineChartAverage";
import { NavLink } from "react-router-dom";

/**
 * Dashboard component representing the dashboard.
 * @returns {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  // Get user ID from the URL
  const { userId } = useParams(); // useParams() is a Hook that allows extracting parameters from a URL.
  const { isDemo } = useParams();
  console.log("isDemo: ", isDemo);
  // Check if the application is in demo mode
  const isDemoBooleen = isDemo?.toLocaleLowerCase() === "true";
  // toLocaleLowerCase() is a method that converts a string to lowercase.

  let provider = isDemoBooleen ? new ApiMockProvider() : new ApiProvider();

  // State variables to store data fetched from the API

  // useState() is a Hook that allows adding local state to a functional component.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [barChartDto, setBarChartDto] = useState([]);
  const [lineChartDto, setLineChartDto] = useState({});
  const [nutrimentDto, setNutrimentDto] = useState(null);
  const [radarPerformanceDto, setRadarPerformanceDto] = useState(null);
  const [radarScoreDto, setRadarScoreDto] = useState(null);

  /**
   * Effect function to fetch data from the API.
   */
  useEffect(() => {
    /**
     * Async function to fetch data from the API.
     */
    async function getData() {
      try {
        // Retrieve data from the API using the functions from the `provider` class
        const firstName = await provider.getUserNameByUserId(userId);
        const lastName = await provider.getUserLastNameByUserId(userId);
        const barChartDto = await provider.getActivitiesByUserId(userId);
        const lineChartDto = await provider.getSessionsByUserId(userId);
        const nutrimentDto = await provider.getNutrimentByUserId(userId);
        const radarPerformanceDto = await provider.getPerformanceByUserId(userId);
        const radarScoreDto = await provider.getScoreByUserId(userId);

        // Update state variables with the fetched data
        setFirstName(firstName);
        setLastName(lastName);
        setBarChartDto(barChartDto);
        setLineChartDto(lineChartDto);
        setNutrimentDto(nutrimentDto);
        setRadarPerformanceDto(radarPerformanceDto);
        setRadarScoreDto(radarScoreDto);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    }

    // Call the function to fetch data from the API
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
