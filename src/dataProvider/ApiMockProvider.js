import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "dataProvider/dataMock";
import BarChartDto from "dto/BarChartDto";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import ChartPerformance from "Components/perfChart/ChartPerformance";
import ChartPerformanceDto from "dto/ChartPerformanceDto";
import NutrimentDto  from "dto/NutrimentDto";

class ApiMockProvider {
	getActivitiesByUserId(userId) {
		// Initialise un tableau d'activités utilisateur vide
		const userSessions = [];
		//console.log(userSessions);
		// Recherche l'utilisateur correspondant à l'ID fourni
		const currentUser = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
		//console.log(currentUser);
		// Si un utilisateur est trouvé, parcoure ses sessions
		if (currentUser) {
			currentUser.sessions.forEach((session) => {
				// Formate la date de la session
				const [yyyy, mm, day] = session.day.split("-");
				const formattedDate = `${day}`;
				//console.log(formattedDate);
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

	/* 	getKindPerfByUserId(userId) {
		// j initialise
		let userData = [];
		console.log(userData);

		// je cherche l'utilisateur correspondant à l'ID fourni
		const userCurrent = USER_PERFORMANCE.find((user) => user.userId === Number(userId));
		console.log(userCurrent);
		if (userCurrent) {
			userCurrent.data.forEach((kind) => {
				//console.log(userCurrent);
				userData.push({
					kind: kind.value,
					value: kind.value,
				});
			});
		}
		return new ChartPerformanceDto(userData, "value", "kind");
	}
} */
}
export default ApiMockProvider;
