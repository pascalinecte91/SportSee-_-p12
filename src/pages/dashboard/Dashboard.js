import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { userUseState } from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
//components
import Loader from "Components/loader/Loader";
import Error from "pages/error/Error";

import BarChartActivity from "Components/barChart/BarChartActivity";
import BarChartTooltip from "Components/barChart/BarChartTooltip";
import LineChartSessions from "Components/barChart/LineChartSessions";
import BarChartCursor from "Components/barChart/BarChartCursor";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import PieChartLevel from "Components/pieChartCard/PieChartCard";



/**
 * Composant React pour le tableau de bord.
 * @returns {JSX.Element} Le composant React pour le tableau de bord.
 */

const Dashboard = () => {
	// Obtient l'ID d'utilisateur à partir de l'URL
	const { userId } = useParams();

	// Indique si le mode démo est activé ou non
	let isDemo = true;
	const mockedDataActivities = new ApiMockProvider(userId).getActivitiesByUserId(userId);
	// Initialise le provider API en fonction du mode démo
	let provider = isDemo ? new ApiMockProvider() : new ApiProvider();


	/**************************************** */

	//fonction qui renvoie  le prenom du user et stocke dans la var firstname
	let firstName = provider.getUserNameByUserId(userId);

	//renvoie le score de la journee et stocke dans "todayScore"
	let todayScore = provider.getTodayScoreByUserId(userId);



	return (
		<section className="dashboard">
			<WelcomeMessage firstName={firstName} />
			<div className="dashboard__content">
				<PieChartLevel todayScore={todayScore} />
				{<BarChartActivity dataActivity={mockedDataActivities} />}
				{<LineChartSessions payload={mockedDataActivities} />}
			
			</div>
		</section>
	);
};

export default Dashboard;
