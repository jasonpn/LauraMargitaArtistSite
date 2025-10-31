import React from 'react'
import {BrowserRouter, Link} from 'react-router'
import './App.css'
import Header from './components/Header'
import {Route, Routes} from 'react-router';
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import PressPage from "./components/PressPage.jsx";
import InvolvementsPage from "./components/InvolvementsPage.jsx";
import PerformanceProjectsPage from "./components/PerformanceProjectsPage.jsx";
import VisualArtProjectsPage from "./components/VisualArtProjectsPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/performanceart" element={<PerformanceProjectsPage />} />
                <Route path="/visualart" element={<VisualArtProjectsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/Involvements" element={<InvolvementsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
