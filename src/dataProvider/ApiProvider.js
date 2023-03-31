import axios from "axios";
import BarChartDto from "dto/BarChartDto";
import BarChartActivity from "Components/barChart/BarChartActivity";

/**
 * @class ApiProvider
 */

class ApiProvider {
	/**
	 * Creates an instance of ApiProvider.
	 * @memberof ApiProvider
	 * @param {*} userId
	 * @return {*}
	 */

	getActivitiesByUserId(userId) {
		//todo aller chercher les data depuis axios

		// todo : hydrater le chartBardto avec les datas axios

		return new BarChartDto("api");
	}
}

export default ApiProvider;
