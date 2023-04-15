import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "dataProvider/dataMock";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import ChartPerformance from "Components/chartPerformance/ChartPerformance";
import ChartPerformanceDto from "dto/ChartPerformanceDto";
import NutrimentDto  from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";



class ApiMockProvider {
	getActivitiesByUserId(userId) {
		// Initialise un tableau d'activités utilisateur vide
		const userSessions = [];
		// Recherche l'utilisateur correspondant à l'ID fourni
		const currentUser = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
		// Si un utilisateur est trouvé, parcoure ses sessions
		if (currentUser) {
			currentUser.sessions.forEach((session) => {
				// Formate la date de la session
				const [yyyy, mm, day] = session.day.split("-");
				const formattedDate = `${day}`;
				// Ajoute les informations de la session au tableau d'activités utilisateur
				userSessions.push({
					day: formattedDate,
					kilogram: session.kilogram,
					calories: session.calories,
				});
			});
		}
		return new BarChartDto(userSessions, "Jour", "Kilogrammes", "Calories");
	}

	getUserNameByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;
		});

		let firstName = user[0].userInfos.firstName;
		return firstName;
	}

	getTodayScoreByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;
		});
		const todayScore = user[0].todayScore;
		return todayScore;
	}

	getNutrimentByUserId(userId) {
		let user = USER_MAIN_DATA.filter((user) => {
			return user.id == userId;
		});
		const keyData = user[0].keyData;
		return new NutrimentDto(keyData);
	}

		getSessionsByUserId(userId) {
			const currentUser = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId));
			const userSessions = [];
			const days = ["L", "M", "M", "J", "V", "S", "D"];
			if (currentUser) {	
				currentUser.sessions.forEach((session) => {
		
					userSessions.push({
							day: days[session.day - 1],
							sessionLength: session.sessionLength,

						});
					});
				
				
		}
			return new  LineChartDto(userSessions, "day", "sessionLength");
		}


	getPerformanceByUserId(userId) {
		const sessions = USER_PERFORMANCE.filter((session) => {
			return userId == session.userId;
		});

		return new ChartPerformanceDto(sessions);
	}
}
export default ApiMockProvider;
