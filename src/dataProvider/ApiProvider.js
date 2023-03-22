import BarChartDto from "dto/BarChartDto";

class ApiProvider {
	getActivitiesByUserId(userId) {

//todo aller chercher les data depuis axios

// todo : hydrater le chartBardto avec les datas axios 

		return new BarChartDto('api');
	}
}

export default ApiProvider;
