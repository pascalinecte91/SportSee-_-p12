import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import RadarScore from "Components/radarScore/RadarScore";
import RadarPerformance from "Components/radarPerformance/RadarPerformance";
import Nutriment from "Components/nutriment/Nutriment";
import LineChartAverage from "Components/lineChart/LineChartAverage";
import Loader from "Components/loader/Loader.jsx";

/**
 * Dashboard component representing the dashboard.
 * @returns {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  // Get user ID from the URL
  const { userId } = useParams();
  const { isDemo } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  console.log("isDemo: ", isDemo);
  // si la var est = à true, une fois convertie en minuscule avec toLocaleLowerCase()
  // si isDemo est = à true, alors isDemoBoolean est bien à true , sino, false
  const isDemoBoolean = isDemo?.toLocaleLowerCase() === "true";
  let provider = isDemoBoolean ? new ApiMockProvider() : new ApiProvider();


  /**
   * State variables to store data fetched from the API.
   * @type {string} firstName - The first name of the user.
   * @type {string} lastName - The last name of the user.
   * @type {Array} barChartDto - The data for the bar chart.
   * @type {Object} lineChartDto - The data for the line chart.
   * @type {Object} nutrimentDto - The data for the nutriment.
   * @type {Object} radarPerformanceDto - The data for the radar performance.
   * @type {Object} radarScoreDto - The data for the radar score.
   */
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
        const firstName = await provider.getUserNameByUserId(userId);
        const lastName = await provider.getUserLastNameByUserId(userId);
        const barChartDto = await provider.getActivitiesByUserId(userId);
        const lineChartDto = await provider.getSessionsByUserId(userId);
        const nutrimentDto = await provider.getNutrimentByUserId(userId);
        const radarPerformanceDto = await provider.getPerformanceByUserId(userId);
        const radarScoreDto = await provider.getScoreByUserId(userId);

        // Simulate loading for 5 seconds
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFirstName(firstName);
        setLastName(lastName);
        setBarChartDto(barChartDto);
        setLineChartDto(lineChartDto);
        setNutrimentDto(nutrimentDto);
        setRadarPerformanceDto(radarPerformanceDto);
        setRadarScoreDto(radarScoreDto);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }

    // Call the function to fetch data from the
    getData();
  }, [userId]);

  return (
    <section className="dashboard">
  
    {isLoading ? (
      <Loader />
    ) : (
      <>
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
      </>
    )}
  </section>
  );
};

export default Dashboard;
