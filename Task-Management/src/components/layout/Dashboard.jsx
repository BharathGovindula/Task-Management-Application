import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = ({ user }) => {
  const [isGridView, setIsGridView] = useState(true);
  
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Header user={user} />
      
      <main className="dashboard-content">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {window.location.pathname === '/' && 'All Tasks'}
            {window.location.pathname === '/completed' && 'Completed Tasks'}
            {window.location.pathname === '/pending' && 'Pending Tasks'}
            {window.location.pathname === '/profile' && 'Profile'}
          </h2>
          
          {window.location.pathname !== '/profile' && (
            <div className="view-toggle">
              <button 
                onClick={() => setIsGridView(true)}
                className={isGridView ? 'active' : ''}
                title="Grid View"
              >
                <span className="material-icons">grid_view</span>
              </button>
              <button 
                onClick={() => setIsGridView(false)}
                className={!isGridView ? 'active' : ''}
                title="List View"
              >
                <span className="material-icons">view_list</span>
              </button>
            </div>
          )}
        </div>
        
        <Outlet context={{ isGridView, user }} />
      </main>
    </div>
  );
};

export default Dashboard;