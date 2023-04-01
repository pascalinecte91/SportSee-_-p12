import axios from "axios";
import BarChartDto from "dto/BarChartDto";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import ChartPerformance from "Components/perfChart/ChartPerformance";
import ChartPerformanceDto from "dto/ChartPerformanceDto";
import NutrimentDto  from "dto/NutrimentDto";

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

		return new BarChartDto("api");
	}

	getNutrimentByUserId(userId) {
		//todo aller chercher les data depuis axios

		// todo : hydrater le chartBardto avec les datas axios

		return new NutrimentDto("api");
	}

	getKindPerfByUserId(userId) {
		return new ChartPerformanceDto("api");
	}
}
export default ApiProvider;
