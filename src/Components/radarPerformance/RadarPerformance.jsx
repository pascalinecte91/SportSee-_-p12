import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { PropTypes } from "prop-types";

/**
 * RadarPerformance component used to display the radar chart on the performance page.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.dto - The object containing radar chart data.
 * @returns {JSX.Element} The RadarPerformance component.
 * @content {Array} props.dto.data - An array of objects with "kind" and "value" keys.
 * The "kind" key represents the performance type and "value" represents the performance value.
 */

/**
 * FormatDataKind function.
 * @param {number} tickItem - The tick item of the graduation.
 * @returns {string} The string corresponding to the performance type.
 * @description Checks if tickItem is not null, false, undefined, or 0, then returns the corresponding performance type.
 */
const FormatDataKind = (tickItem) => {
  const Kind = ["Cardio", "Energy", "Endurance", "Strength", "Speed", "Intensity"];
  if (tickItem) return Kind[tickItem - 1];
};

const RadarPerformance = ({ dto }) => {
  return (
    <div
      className="radarChartPerf"
      style={{ minWidth: "258px", height: "263px" }}
    >
      <ResponsiveContainer>
        <RadarChart
          cx="50%" // center x
          cy="50%"
          outerRadius={80} // outer radius
          data={dto.data.data}
          style={{ backgroundColor: "#282D30", borderRadius: "5px" }} // radar chart style
        >
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={FormatDataKind}
            stroke="#ffff" // line color
            dy={2} // line offset
            tickLine={false} // display lines between octagon and text
            style={{
              fontSize: "10px",
              fontWeight: "500",
            }}
          />

          <Radar
            dataKey="value" // axis value
            stroke="#FF0000" // outline color
            fill="#FF0000" // fill color
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Proptypes
FormatDataKind.propTypes = {
  tickItem: PropTypes.number.isRequired,
};

RadarPerformance.propTypes = {
  dto: PropTypes.object,
};

export default RadarPerformance;
