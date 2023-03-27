import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "dataProvider/dataMock";

import BarChartDto from "dto/BarChartDto";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

class ApiMockProvider {
	getActivitiesByUserId(userId) {
		let userActivityData = [...USER_ACTIVITY].filter((dataActivity) => {
			return dataActivity.userId == userId;
		});
		let userActivity = userActivityData[0];
		//todo : hydrater le chartBardto avec les datas userActivity
		console.log(userActivityData);
		//todo : hydrater le chartBardto avec les datas userActivity

		return new BarChartDto("apiMock ", data);
	}
}
export default ApiMockProvider;
