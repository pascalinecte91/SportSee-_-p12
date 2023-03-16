import { USER_ACTIVITY } from "data/dataMock";
import ChartBarDto from "dto/ChartBarDto";

class ApiMockProvider {
	getActivitiesByUserId(userId) {
		let userActivityData = [...USER_ACTIVITY].filter((dataActivity) => {
			return dataActivity.userId == userId;
		});
		let userActivity = userActivityData[0];

    //todo : hydrater le chartBardto avec les datas userActivity 

    return new ChartBarDto('apiMock');
	}
}

export default ApiMockProvider;
