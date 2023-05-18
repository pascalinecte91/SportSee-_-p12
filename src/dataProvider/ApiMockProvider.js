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
 * Classe ApiMockProvider avec des fonctions pour récupérer des données mockées.
 * @returns {ApiMockProvider}
 * @class
 */
class ApiMockProvider {
  /**
   * Récupère les activités d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {BarChartDto} - Les activités de l'utilisateur sous forme de BarChartDto.
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
      "Jour",
      "Kilogrammes",
      "Calories"
    );
  }

  /**
   * Récupère le prénom d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {string} - Le prénom de l'utilisateur.
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
   * Récupère le nom de famille d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {string} - Le nom de famille de l'utilisateur.
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
   * Récupère le score d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {RadarScoreDto} - Le score de l'utilisateur sous forme de RadarScoreDto.
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
   * Récupère les données nutritives d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {NutrimentDto} - Les données nutritives de l'utilisateur sous forme de NutrimentDto.
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
   * Récupère les sessions d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {LineChartDto} - Les sessions de l'utilisateur sous forme de LineChartDto.
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
   * Récupère les performances d'un utilisateur par son ID.
   * @param {number} userId - L'ID de l'utilisateur.
   * @returns {RadarPerformanceDto} - Les performances de l'utilisateur sous forme de RadarPerformanceDto.
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
