import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavItems, ICON_MAP } from '../../config/routes';

const SideNav = ({ onClose }) => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState(['Content']);
  const navItems = getNavItems();

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const SvgIcon = ({ iconPath, className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
    </svg>
  );

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col h-full">
      {/* Logo and Close button for mobile */}
      <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary-600">AdminDashboard</h1>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-lg text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map((item, index) => {
          if (item.isStandalone) {
            // Standalone route (like Dashboard)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center px-4 lg:px-6 py-3 text-sm transition-colors mb-2 ${
                  isActiveRoute(item.path)
                    ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <SvgIcon iconPath={ICON_MAP[item.icon]} className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          } else if (item.isCategory) {
            // Category with items
            return (
              <div key={item.category} className="mb-4">
                <button
                  onClick={() => toggleCategory(item.category)}
                  className="w-full flex items-center justify-between px-4 lg:px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="text-sm font-medium uppercase tracking-wide">
                    {item.category}
                  </span>
                  <SvgIcon 
                    iconPath={expandedCategories.includes(item.category) 
                      ? "M5 15l7-7 7 7" 
                      : "M19 9l-7 7-7-7"
                    } 
                    className="w-4 h-4"
                  />
                </button>

                {expandedCategories.includes(item.category) && (
                  <div className="mt-2">
                    {item.items
                      .filter(navItem => navItem.showInNav)
                      .map((navItem) => (
                        <Link
                          key={navItem.path}
                          to={navItem.path}
                          onClick={onClose}
                          className={`flex items-center px-4 lg:px-6 py-3 text-sm transition-colors ${
                            isActiveRoute(navItem.path)
                              ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <SvgIcon iconPath={ICON_MAP[navItem.icon]} className="w-5 h-5 mr-3" />
                          {navItem.name}
                        </Link>
                      ))
                    }
                  </div>
                )}
              </div>
            );
          }
          
          return null;
        })}
      </nav>
    </div>
  );
};

export default SideNav;
