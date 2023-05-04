import {USER_ACTIVITY,USER_MAIN_DATA,USER_AVERAGE_SESSIONS,USER_PERFORMANCE,} from "dataProvider/dataMock";

// dto
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import RadarScoreDto from "dto/RadarScoreDto";

/**
 * @class ApiMockProvider
 * @description toutes les fonctions de cette classe sont des fonctions qui permettent de   récupérer des données mockées
 * @returns {ApiMockProvider}
 */

class ApiMockProvider {
  /**
   * @name getActivitiesByUserId
   * @use find pour trouver l'objet correspondant à l'id
   * @return {BarChartDto}
   * @memberof ApiMockProvider
   * */
  getActivitiesByUserId(userId) {
    const userSessions = []; // tableau vide
    // on cherche l'objet correspondant à l'id
    const currentUser = USER_ACTIVITY.find(
      (user) => user.userId === parseInt(userId)
    );
    if (currentUser) {
      currentUser.sessions.forEach((session) => {
        // on parcourt les sessions de l'utilisateur
        const day = session.day.split("-"); // on sépare la date en 3 parties
        const formattedDate = `${day}`; // on crée une nouvelle variable avec la date formatée
        userSessions.push({
          day: formattedDate, //on ajoute :
          kilogram: session.kilogram,
          calories: session.calories,
        });
      });
    }
    return new BarChartDto(userSessions, "Jour", "Kilogrammes", "Calories");
   
  }
  /******************************************************************************************/

  /**
   * @name getUserNameByUserId
   * @use filter pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {RadarPerformanceDto}
   * @memberof ApiMockProvider
   * */

  getUserNameByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    let firstName = user[0].userInfos.firstName;
    return firstName;
  }
  /******************************************************************************************/
  /**
   * @name getUserLastNameByUserId
   * @use filter pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {RadarPerformanceDto}
   * @memberof ApiMockProvider
   * */

  getUserLastNameByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    let lastName = user[0].userInfos.lastName;
    return lastName;
  }
  /******************************************************************************************/
  /**
   * @name getScoreByUserId
   * @use filter pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {RadarPerformanceDto}
   * @memberof ApiMockProvider
   * */

  getScoreByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    const todayScore = user[0].todayScore;
    return new RadarScoreDto(todayScore);
  }
  /******************************************************************************************/
  /**
   * @name getNutrimentByUserId
   * @use filter pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {NutrimentDto}
   * @memberof ApiMockProvider
   * */

  getNutrimentByUserId(userId) {
    let user = USER_MAIN_DATA.filter((user) => {
      return user.id == userId;
    });
    const keyData = user[0].keyData;
    return new NutrimentDto(keyData);
  }
  /******************************************************************************************/
  /**
   * @name getSessionsByUserId
   * @use find pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {LineChartDto}
   * @memberof ApiMockProvider
   * */

  // on ne peut pas utiliser la fonction getActivitiesByUserId(userId) pour récupérer les sessions
  // parce que les données ne sont pas formatées de la même manière

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
    return new LineChartDto(userSessions, "day", "sessionLength");
  }

  /****************************************************************************************/
  /**
   * @name getPerformanceByUserId
   * @use find pour trouver l'objet correspondant à l'id
   * @param {*} userId
   * @return {RadarPerformanceDto}
   * @memberof ApiMockProvider
   * @use parseInt pour convertir l'id en nombre
   * @desc on cherche l'objet correspondant à l'id
   * parce que dans le fichier dataMock, l'id est un nombre
   * dans le fichier dataProvider, l'id est une chaîne de caractères
   */

  getPerformanceByUserId(userId) {
    const currentUser = USER_PERFORMANCE.find((user) => {
      return user.userId === parseInt(userId);
    });

    return new RadarPerformanceDto(currentUser);
  }
}

export default ApiMockProvider;
