import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './appLayout/Layout'
import Home from './home/Home';
import DisplayProjects from './projects/Projects';

function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<DisplayProjects />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
  </Router>
  );
}

export default AppRouter;