import React, { useState } from 'react';
import './Layout.css';
import SidebarButton from './menu.png';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div className={`main-container`}>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default AppLayout;