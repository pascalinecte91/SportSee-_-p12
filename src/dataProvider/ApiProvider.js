import ChartBarDto from "dto/ChartBarDto";

class ApiProvider {
	getActivitiesByUserId(userId) {

//todo aller chercher les data depuis axios

// todo : hydrater le chartBardto avec les datas axios 

		return new ChartBarDto('api');
	}
}

export default ApiProvider;
