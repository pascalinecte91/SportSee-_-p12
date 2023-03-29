import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BarChartWrapper from "Components/barchart/chart/BarChartWrapper";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import Loader from "Components/loader/Loader";
import TodayScore from "Components/todayScore/TodayScore";

import { userUseState } from "dataProvider/ApiProvider";


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
	let provider = isDemo ? new ApiMockProvider() : new ApiProvider();

	// Obtient les activités de l'utilisateur à partir du fournisseur API
	let bartChartDtoActivities = provider.getActivitiesByUserId(userId);

	let firstName = provider.getUserNameByUserId(userId);

	let todayScore = provider.getTodayScoreByUserId(userId);
	console.log(todayScore);
	// Rendu du composant
	return (
		<section className="dashboard">
			<WelcomeMessage firstName={firstName} />
	
			<TodayScore todayScore={todayScore} />

			{<BarChartWrapper dto={bartChartDtoActivities} />}
		</section>
	);
};

export default Dashboard;
