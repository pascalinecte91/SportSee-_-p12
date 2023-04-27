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
import RadarScore from "Components/radarScore/RadarScore";
import RadarPerformance from "Components/radarPerformance/RadarPerformance";
import Nutriment from "Components/nutriment/Nutriment";
import LineChartAverage from "Components/lineChart/LineChartAverage";
//dto
import BarChartDto from "dto/BarChartDto";
import NutrimentDto from "dto/NutrimentDto";
import LineChartDto from "dto/LineChartDto";
import RadarPerformanceDto from "dto/RadarPerformanceDto";
import RadarScoreDto from "dto/RadarScoreDto";




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
	const radarPerformanceDto = provider.getPerformanceByUserId(userId);  
	const radarScoreDto = provider.getScoreByUserId(userId);
	console.log(radarScoreDto);

	//recupere le nom de l'utilisateur et stocke dans "firstName"
	let firstName = provider.getUserNameByUserId(userId);
	let lastName = provider.getUserLastNameByUserId(userId);


	return (
	
		<section className="dashboard">
			<WelcomeMessage firstName={firstName} lastName={lastName} />

			<aside className="dashboard__charts">
				<article className="dashboard__chartsLinear">
					<BarChartWrapper dto={barChartDto} />

					<div className="dashboard__threeGraph">
						<LineChartAverage dto={lineChartDto} />
						<RadarPerformance dto={radarPerformanceDto} />
						<RadarScore dto={radarScoreDto} />
					</div>
				</article>

				<article className="dashboard__nutrients">
					<Nutriment dto={nutrimentDto} />
				</article>
			</aside>
		</section>
	);
};

export default Dashboard;
