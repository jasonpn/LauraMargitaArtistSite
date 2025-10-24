import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PressPage from './PressPage';
import ProjectsPage from './ProjectsPage';

import {Routes, Route, useLocation} from 'react-router-dom';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" elementt={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/press" element={<PressPage />} />
        </Routes>
    );
};

export default PageRoutes;