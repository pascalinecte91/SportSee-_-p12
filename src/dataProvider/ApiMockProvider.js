import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "dataProvider/dataMock";
import BarChartDto from "dto/BarChartDto";
import BarChartActivity from "Components/barChart/BarChartActivity";


class ApiMockProvider {
	constructor(userId) {
		// Initialise l'ID de l'utilisateur
		this.userId = userId;
	}

	getActivitiesByUserId() {
		// Initialise un tableau d'activités utilisateur vide
		const userActivity = [];
		// Recherche l'utilisateur correspondant à l'ID fourni
		const currentUser = USER_ACTIVITY.find((user) => user.userId === parseInt(this.userId));

		// Si un utilisateur est trouvé, parcoure ses sessions
		if (currentUser) {
			currentUser.sessions.forEach((session) => {
				// Formate la date de la session
				const [yyyy, mm, dd] = session.day.split("-");
				const formattedDate = `${dd}/${mm}`;
				// Ajoute les informations de la session au tableau d'activités utilisateur
				userActivity.push({
					day: formattedDate,
					kilograms: session.kilogram,
					calories: session.calories,
				});
			});
		}

		// Retourne le tableau d'activités utilisateur
		return userActivity;
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

	getSessionsUserId(userId) {
		let user = USER_AVERAGE_SESSIONS.filter((user) => {
			return user.id == userId;
		});
	}
}
export default ApiMockProvider;
