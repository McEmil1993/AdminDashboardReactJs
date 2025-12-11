import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomPieChart = ({ 
  data, 
  dataKey, 
  nameKey,
  colors = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  height = 300,
  title = "Pie Chart"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 lg:p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [value, 'Value']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
