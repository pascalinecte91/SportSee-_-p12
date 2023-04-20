import axios from "axios";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import RadarPerformance from "Components/radarPerformance/RadarPerformance";
//dto
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import NutrimentDto from "dto/NutrimentDto";
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
		return new RadarPerformanceDto("api");
	}

	getPerformanceyUserId(userId) {
		return new RadarPerformanceDto("api");
	}

	getScoreByUserId(userId) {
		return new RadarScoreDto("api");
	}
}
export default ApiProvider;
