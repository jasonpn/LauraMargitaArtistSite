import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PressPage from './PressPage';
import ProjectsPage from './ProjectsPage';
import VisualArtProjectsPage from './VisualArtProjectsPage';
import PerformanceProjectsPage from './PerformanceProjectsPage';
import InvolvementsPage from './InvolvementsPage';
import Details from './Details';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/visualart" element={<VisualArtProjectsPage />} />
                <Route path="/visualart/:id" element={<Details />} />
                <Route path="/performanceart" element={<PerformanceProjectsPage />} />
                <Route path="/involvements" element={<InvolvementsPage />} />
                <Route path="/press" element={<PressPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;