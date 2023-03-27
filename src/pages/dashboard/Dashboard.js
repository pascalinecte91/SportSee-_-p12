import React from 'react';
import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams} from "react-router-dom";
import BarChartWrapper from "Components/barchart/chart/BarChartWrapper"; 
import WelcomeMessage from "Components/welcome/WelcomeMessage";




/**
 * Composant React pour le tableau de bord.
 * @returns {JSX.Element} Le composant React pour le tableau de bord.
 */

const Dashboard = () => {
	// Obtient l'ID d'utilisateur à partir de l'URL
	const { userId } = useParams();

	// Indique si le mode démo est activé ou non
	let isDemo = true;

	// Initialise le provider API en fonction du mode démo
	let provider = isDemo 
		? new ApiMockProvider()
		: new ApiProvider();

	// Obtient les activités de l'utilisateur à partir du fournisseur API
	let bartChartDtoActivities = provider.getActivitiesByUserId(userId);
console.log(bartChartDtoActivities);
	// Rendu du composant
	return (
		<>
			<section className="dashboard">
				<WelcomeMessage  />
				{<BarChartWrapper dto={bartChartDtoActivities} />}
			</section>
		</>
	);
};

export default Dashboard;


