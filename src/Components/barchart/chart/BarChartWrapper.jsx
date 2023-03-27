/* import "./styles.css"; */
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


export default function BarCharWrapper({ dto }) {
  console.log(dto);
	return (
		<BarChart
			width={500}
			height={300}
      // remplacer par les donnees du dto 
			data={dto.data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
		</BarChart>
	);
}
