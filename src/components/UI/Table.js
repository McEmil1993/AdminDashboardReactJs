import React from 'react';

const Table = ({ 
    columns, 
    data, 
    keyField = 'id',
    loading = false,
    className = '',
    onRowClick 
  }) => {
    // ... existing code ...
  
    return (
      <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr
                  key={row[keyField]}
                  className={onRowClick ? 'hover:bg-gray-50 cursor-pointer transition-colors' : ''}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {column.render ? column.render(row[column.key], row, index) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          
          {data.length === 0 && !loading && (
            <div className="text-center py-8">
              <div className="text-gray-500">No data found</div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Table;
