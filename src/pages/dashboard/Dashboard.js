import ApiMockProvider from "dataProvider/ApiMockProvider";
import ApiProvider from "dataProvider/ApiProvider";
import { userUseState } from "dataProvider/ApiProvider";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Error from "pages/error/Error";
//components
import Loader from "Components/loader/Loader";
import BarChartWrapper from "Components/barChart/BarChartWrapper";
import WelcomeMessage from "Components/welcome/WelcomeMessage";
import PieChart from "Components/pieChart/PieChart";
import ChartPerformance from "Components/chartPerformance/ChartPerformance";
import Nutriment from "Components/nutriment/Nutriment";
import LineChartAverage from "Components/lineChart/LineChartAverage";
//dto
import BarChartDto from "dto/BarChartDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import ChartPerformanceDto from "dto/ChartPerformanceDto";






const Dashboard = () => {
	// Obtient l'ID d'utilisateur à partir de l'URL
	const { userId } = useParams();

	// Indique si le mode démo est activé ou non
	let isDemo = true;

	// Initialise le provider API en fonction du mode démo
	let provider = isDemo ? new ApiMockProvider() : new ApiProvider();
	const barChartDto = provider.getActivitiesByUserId(userId);
	const nutrimentDto = provider.getNutrimentByUserId(userId);
	const lineChartDto = provider.getSessionsByUserId(userId);
/* 	const chartPerformanceDto = provider.getPerformanceByUserId(userId);  */
	//recupere les données de performance et stocke dans "chartPerformanceDto"

	//recupere le nom de l'utilisateur et stocke dans "firstName"
	let firstName = provider.getUserNameByUserId(userId);
	let todayScore = provider.getTodayScoreByUserId(userId);


	return (
		<main className="dashboard">
			<section className="dashboard__content">
				<WelcomeMessage firstName={firstName} />

				<aside className="dashboard__charts">
					<article className="dashboard__chartsContent">
						<div className="Dashboard__flex">
							<BarChartWrapper dto={barChartDto} />
							<div className="dashboard__line">
								<LineChartAverage dto={lineChartDto} />
							</div>
							{/* <ChartPerformance dto={chartPerformanceDto} />  */}
							{/* 	<PieChart todayScore={todayScore} /> */}
						</div>
					</article>
					<article className="dashboard__figure">
						<Nutriment dto={nutrimentDto} />
					</article>
				</aside>
			</section>
		</main>
	);
};

export default Dashboard;