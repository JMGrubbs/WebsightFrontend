import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './appLayout/Layout'
import Home from './home/Home';
import AppAbout from './about/about';
import AppContacts from './contact/contact';
import DisplayProjects from './projects/Projects';

function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<DisplayProjects />} />
            <Route path="/contact" element={<AppContacts />} />
            <Route path="/about" element={<AppAbout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
  </Router>
  );
}

export default AppRouter;