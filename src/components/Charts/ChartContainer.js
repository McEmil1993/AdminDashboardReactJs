import React from 'react';

const ChartContainer = ({ 
  children, 
  title, 
  subtitle,
  className = "",
  action
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${className}`}>
      {(title || action) && (
        <div className="px-4 lg:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-4 lg:p-6">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
