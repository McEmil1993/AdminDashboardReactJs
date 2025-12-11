import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ 
  data, 
  xAxisKey, 
  barKeys, 
  colors = ['#0ea5e9', '#10b981', '#f59e0b'],
  height = 300,
  title = "Bar Chart",
  showGrid = true,
  showLegend = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 lg:p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip 
            formatter={(value) => [value, 'Value']}
            labelFormatter={(label) => `Category: ${label}`}
          />
          {showLegend && <Legend />}
          
          {barKeys.map((key, index) => (
            <Bar 
              key={key}
              dataKey={key} 
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
