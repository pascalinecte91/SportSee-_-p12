import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "dataProvider/dataMock";
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import RadarScoreDto from "dto/RadarScoreDto";

/**
 * Class ApiMockProvider with functions to retrieve mocked data.
 * @returns {ApiMockProvider}
 * @class
 */
class ApiMockProvider {
  /**
   * Retrieves user activities by user ID.
   * @param {number} userId - The user ID.
   * @returns {BarChartDto} - User activities in the form of BarChartDto.
   * @memberof ApiMockProvider
   */
  getActivitiesByUserId(userId) {
    const userSessions = [];
    const currentUser = USER_ACTIVITY.find(
      (user) => user.userId === parseInt(userId)
    );
    if (currentUser) {
      currentUser.sessions.forEach((session) => {
        const day = session.day.split("-");
        const formattedDate = `${day}`;
        userSessions.push({
          day: formattedDate,
          kilogram: session.kilogram,
          calories: session.calories,
        });
      });
    }
    return new BarChartDto(
      userSessions,
      "Day",
      "Kilograms",
      "Calories"
    );
  }

  /**
   * Retrieves the first name of a user by user ID.
   * @param {number} userId - The user ID.
   * @returns {string} - The first name of the user.
   * @memberof ApiMockProvider
   */
  getUserNameByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    let firstName = user[0].userInfos.firstName;
    return firstName;
  }

  /**
   * Retrieves the last name of a user by user ID.
   * @param {number} userId - The user ID.
   * @returns {string} - The last name of the user.
   * @memberof ApiMockProvider
   */
  getUserLastNameByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    let lastName = user[0].userInfos.lastName;
    return lastName;
  }

  /**
   * Retrieves the score of a user by user ID.
   * @param {number} userId - The user ID.
   * @returns {RadarScoreDto} - The user's score in the form of RadarScoreDto.
   * @memberof ApiMockProvider
   */
  getScoreByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    const todayScore = user[0].todayScore;
    return new RadarScoreDto(todayScore);
  }

  /**
   * Retrieves the nutrient data of a user by user ID.
   * @param {number} userId - The user ID.
   * @returns {NutrimentDto} - The user's nutrient data in the form of NutrimentDto.
   * @memberof ApiMockProvider
   */
  getNutrimentByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    const keyData = user[0].keyData;
    return new NutrimentDto(keyData);
  }

  /**
   * Retrieves user sessions by user ID.
   * @param {number} userId - The user ID.
   * @returns {LineChartDto} - User sessions in the form of LineChartDto.
   * @memberof ApiMockProvider
   */
  getSessionsByUserId(userId) {
    const currentUser = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === parseInt(userId)
    );
    const userSessions = currentUser
      ? currentUser.sessions.map((session) => ({
          day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
          sessionLength: session.sessionLength,
        }))
      : [];
      
    console.log(userSessions);
    return new LineChartDto(userSessions, "day", "sessionLength");
  }

  /**
   * Retrieves user performance by user ID.
   * @param {number} userId - The user ID.
   * @returns {RadarPerformanceDto} - User performance in the form of RadarPerformanceDto.
   * @memberof ApiMockProvider
   */
  getPerformanceByUserId(userId) {
    const currentUser = USER_PERFORMANCE.find((user) => {
      return user.userId === parseInt(userId);
    });
    return new RadarPerformanceDto(currentUser);
  }
}

export default ApiMockProvider;
