import React from 'react';
import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams} from "react-router-dom";
import BarchartWrapper from "Components/barchart/BarchartWrapper";


/**
 * Component page that displays all component charts
 * @Component 
 */


const Dashboard = () => {
	const { userId } = useParams();
	let isDemo = false;
	let provider = isDemo 
		? new ApiMockProvider()
		: new ApiProvider();

let bartChartDtoActivities = provider.getActivitiesByUserId(userId);


	return (
		<>
			<section className="dashboard">
			<BarchartWrapper dto={bartChartDtoActivities} />
			</section>
		</>
	);
};

export default Dashboard;


