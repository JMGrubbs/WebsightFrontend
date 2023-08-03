import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './appLayout/Layout'
import Home from './components/home/Home';
import AppAbout from './components/about/about';
import AppContacts from './components/contact/contact';
import Projects from './components/projects/Projects';

const AppRouter = (props) => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout props={props}/>} >
            <Route path="/" element={<Home props={props}/>} />
            <Route path="/projects" element={<Projects props={props}/>} />
            <Route path="/contact" element={<AppContacts props={props}/>} />
            <Route path="/about" element={<AppAbout props={props}/>} />
            <Route path="*" element={<Navigate to="/" props={props}/>} />
          </Route>
        </Routes>
  </Router>
  );
}

export default AppRouter;