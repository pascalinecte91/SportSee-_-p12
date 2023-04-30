import axios from "axios";
//dto
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import WelcomeMessage from "Components/welcome/WelcomeMessage";



class ApiProvider {
  async getActivitiesByUserId(userId) {
    try {
      const response = await axios.get(`/users/${userId}/activities`);
      const userSessions = response.data.sessions.map((session) => {
        const [yyyy, mm, day] = session.day.split("-");
        const formattedDate = `${day}`;
        return {
          day: formattedDate,
          kilogram: session.kilogram,
          calories: session.calories,
        };
      });
      return new BarChartDto(
        userSessions,
        "Jour",
        "Kilogrammes",
        "Calories"
      );
    } catch (error) {
      console.error(error);
    }
  }
}


/* 	getAverageByUserId(userId) {
		return new LineChartDto("api");
	}

	getPerformanceByUserId(userId) {
		return new RadarPerformanceDto("api");
	}

	getScoreByUserId(userId) {
		return new RadarScoreDto("api");
	}  
 */

export default ApiProvider;
