import React, { useState } from 'react';
import './Layout.css';
import SidebarButton from './menu.png';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='app-layout' >
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <img src={SidebarButton} alt="" className="sidebar-img" />
        </button>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/projects">Past Projects</Link>
          </li>
        </ul>
      </div>
      <div className={`main-container`}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;