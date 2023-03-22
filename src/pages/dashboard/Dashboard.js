import React from 'react';
import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams} from "react-router-dom";
import BarChartActivity from "Components/barchart/BarChartActivity";
import BarChartLegend from "Components/barchart/BarChartLegend";
import BarChartTooltip from "Components/barchart/BarChartTooltip";
import BarChartCursor from "Components/barchart/BarChartCursor";
import BarChartWrapper from "Components/barchart/chart/BarChartWrapper"; 


/**
 * Composant React pour le tableau de bord.
 * @returns {JSX.Element} Le composant React pour le tableau de bord.
 */

const Dashboard = () => {
	// Obtient l'ID d'utilisateur à partir de l'URL
	const { userId } = useParams();

	// Indique si le mode démo est activé ou non
	let isDemo = false;

	// Initialise le provider API en fonction du mode démo
	let provider = isDemo 
		? new ApiMockProvider()
		: new ApiProvider();

	// Obtient les activités de l'utilisateur à partir du fournisseur API
	let bartChartDtoActivities = provider.getActivitiesByUserId(userId);

	// Rendu du composant
	return (
		<>
			<section className="dashboard">
				<BarChartWrapper dto={bartChartDtoActivities} />
			</section>
		</>
	);
};

export default Dashboard;


