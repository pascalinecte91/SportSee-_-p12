import axios from "axios";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import ChartPerformance from "Components/chartPerformance/ChartPerformance";
//dto
import ChartPerformanceDto from "dto/ChartPerformanceDto";
import NutrimentDto  from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import BarChartDto from "dto/BarChartDto";

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

	getAverageByUserId(userId) {
		return new LineChartDto("api");
	}

	getPerformanceyUserId(userId) {
		return new ChartPerformanceDto("api");
	}
}
export default ApiProvider;
