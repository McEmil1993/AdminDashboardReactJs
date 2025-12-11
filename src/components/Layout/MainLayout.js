import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SideNav from './SideNav';
import TopNav from './TopNav';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!user) {
    return children;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop, overlay for mobile */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <SideNav onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
