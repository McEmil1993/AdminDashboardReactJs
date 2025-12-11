import React from 'react';

const Widget = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  color = 'primary',
  className = '' 
}) => {
  const colors = {
    primary: 'bg-primary-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500'
  };

  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className={`${colors[color]} rounded-lg p-3`}>
            {icon}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Widget;
