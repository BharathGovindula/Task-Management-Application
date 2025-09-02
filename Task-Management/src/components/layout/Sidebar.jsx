import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'All Tasks', icon: 'dashboard' },
    { path: '/completed', label: 'Completed Tasks', icon: 'check_circle' },
    { path: '/pending', label: 'Pending Tasks', icon: 'pending' },
    { path: '/profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <aside className="sidebar">
      <h2>Task Manager</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <span className="icon material-icons">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;