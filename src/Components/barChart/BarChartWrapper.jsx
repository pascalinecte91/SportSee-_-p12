import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PropTypes } from "prop-types";

/**
 * CustomTooltip component is used to display the tooltip when the user hovers over the graph.
 * @param {boolean} active - Determines if the tooltip is active.
 * @param {Array} payload - The data payload of the tooltip.
 * @returns {JSX.Element} The tooltip component.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{payload[0].value + " kg"}</p>
        <p>{payload[1].value + " KCal"}</p>
      </div>
    );
  }
  return null;
};

/**
 * BarChartWrapper component is used to display the bar chart with the tooltip.
 * @param {*} props - The component props.
 * @param {object} props.dto - The data object for the chart.
 * @returns {JSX.Element} The bar chart component.
 */
const BarChartWrapper = ({ dto }) => {
  return (
    <div className="wrapper">
      <ResponsiveContainer aspect={2.3}>
        <BarChart
          width={835}
          height={320}
          data={dto.data}
          margin={{
            top: 80,
            right: 48,
            left: 48,
            bottom: 32,
          }}
          barGap={8}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={`#dedede`}
          />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => day.slice(-1)}
            tickLine={false}
            axisLine={false}
            tickMargin={15}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            orientation="left"
            tick={true}
            hide
            tickCount={3}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            tickLine={false}
            stroke="FFFFF"
            domain={["dataMin - 1", "dataMax"]}
            tickCount={3}
            tick={{ stroke: "9B9EAC" }}
            dx={50}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconSize={8}
            iconType={"circle"}
            width={277}
            height={25}
            wrapperStyle={{ top: "4%", right: "5%" }}
            formatter={(kilogram) => {
              return (
                <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>{kilogram}
                </span>
              );
            }}
          />
          <Tooltip
            wrapperStyle={{ outlineStyle: "none" }}
            content={<CustomTooltip />}
            cursor={{ fill: "#DFDFDF" }}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#00000"
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#FF0000"
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
          <text
            x="5%"
            y="7%"
            dominantBaseline="middle"
            fill="#20253A"
            fontSize="15"
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

BarChartWrapper.propTypes = {
  dto: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};

export default BarChartWrapper;
