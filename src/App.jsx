import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import PressPage from './components/PressPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import VisualArtProjectsPage from './components/VisualArtProjectsPage.jsx';
import PerformanceProjectsPage from './components/PerformanceProjectsPage.jsx';
import InvolvementsPage from './components/InvolvementsPage.jsx';
import Details from './components/Details.jsx';

const App = () => {
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

export default App;