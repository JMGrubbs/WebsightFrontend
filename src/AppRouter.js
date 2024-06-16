import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './appLayout/Layout'
import Home from './components/home/Home';
import AppAbout from './components/about/about';
import AppContacts from './components/contact/contact';
import Projects from './components/projects/Projects';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<AppContacts />} />
          <Route path="/about" element={<AppAbout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;