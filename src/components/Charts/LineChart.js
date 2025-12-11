import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ 
  data, 
  xAxisKey, 
  lineKeys, 
  colors = ['#0ea5e9', '#10b981', '#f59e0b'],
  height = 300,
  title = "Line Chart",
  strokeWidth = 2
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 lg:p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          
          {lineKeys.map((key, index) => (
            <Line 
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={strokeWidth}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
