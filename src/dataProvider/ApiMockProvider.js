import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "dataProvider/dataMock";
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";
import RadarScoreDto from "dto/RadarScoreDto";


/**
 * @class ApiMockProvider
 * @description Classe qui permet de récupérer les données mockees
 * @returns {ApiMockProvider}
 * 
*/

class ApiMockProvider {
	getActivitiesByUserId(userId) {
		const userSessions = []; // tableau vide
		// on cherche l'objet correspondant à l'id
		const currentUser = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
		if (currentUser) {
			currentUser.sessions.forEach((session) => {
				// on parcourt les sessions de l'utilisateur
				const [yyyy, mm, day] = session.day.split("-"); // on sépare la date en 3 parties
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

	/**
	 * @use .filter pour trouver l'objet correspondant à l'id
	 * @param {*} userId
	 * @return {string}
	 * @memberof ApiMockProvider
	 */

	getUserNameByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;

		});
		let firstName = user[0].userInfos.firstName;
		return firstName;
		
	}

	getUserLastNameByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;
		
		});
		let lastName = user[0].userInfos.lastName;
		return lastName;
	}

	getScoreByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;
		});
		const todayScore = user[0].todayScore;
		return new RadarScoreDto(todayScore);
	}

	/**
	 * @use .filter pour trouver l'objet correspondant à l'id
	 * @param {*} userId
	 * @return {NutrimentDto}
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
	 * @use .find pour trouver l'objet correspondant à l'id
	 * @use parseInt pour convertir le string en un entier
	 * @use .map pour créer un tableau avec les données souhaitées avec la prop day et session length
	 * @param {*} userId
	 * day = chaines de caractères
	 * sessionLength = nombre
	 * @valeur  session.day - 1 pour avoir le bon index du tableau
	 * @return {LineChartDto}
	 * @memberof ApiMockProvider
	 */

	getSessionsByUserId(userId) {
		const currentUser = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId));
		const userSessions = currentUser
			? currentUser.sessions.map((session) => ({
					day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
					sessionLength: session.sessionLength,
			  }))
			: [];
		return new LineChartDto(userSessions, "day", "sessionLength");
	}

	getPerformanceByUserId(userId) {
		const currentUser = USER_PERFORMANCE.find((user) => {
			//.find pour trouver l'objet correspondant à l'id
			return user.userId === parseInt(userId);
		});

		return new RadarPerformanceDto(currentUser);
	}
}

export default ApiMockProvider;
