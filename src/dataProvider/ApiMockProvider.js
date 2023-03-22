import { USER_ACTIVITY } from "dataProvider/dataMock";
import BarChartDto from "dto/BarChartDto";

class ApiMockProvider {
	getActivitiesByUserId(userId) {
		let userActivityData = [...USER_ACTIVITY].filter((dataActivity) => {
			return dataActivity.userId == userId;
		});
		let userActivity = userActivityData[0];
		 //todo : hydrater le chartBardto avec les datas userActivity 

    //todo : hydrater le chartBardto avec les datas userActivity 

    return new ChartBarDto('apiMock');
	}

		getAverageByUserId(userId) {
		let userAverageSessionData = [...USER_AVERAGE_SESSIONS].filter((dataAverageSession) => {
			return dataAverageSession.userId == userId;
		});
		let userAverageSession = userAverageSessionData[0];

   

    return new BarChartDto('apiMock');
	}
}


export default ApiMockProvider;
