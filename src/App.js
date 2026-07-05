import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import EducationalBackground from './sections/EducationalBackground';
import MoreAboutMe from './sections/MoreAboutMe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeviceSpecification from './sections/DeviceSpecification';
import LandingPage from './sections/LandingPage';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import FloatingContact from './sections/FloatingContact';
import HireMeSection from './sections/HireMeSection';

// Drei Loader
import { Loader } from "@react-three/drei";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Box sx={{ overflow: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <FloatingContact />
              <LandingPage />
              <Home />
              <ServicesSection />
              <Skills />
              <PortfolioSection />
              <About />
              <WorkExperience />
              <EducationalBackground />
              <DeviceSpecification />
              <HireMeSection />
              <Contact />
            </>
          } />
          <Route path="/more-about-me" element={<MoreAboutMe />} />
        </Routes>
        <Footer />

        {/* 🔥 Global Loader */}
        <Loader
          containerStyles={{ backgroundColor: '#020617' }} // dark background
          barStyles={{ backgroundColor: '#38bdf8' }}       // cyan progress bar
          dataStyles={{ color: '#fff', fontWeight: 'bold' }} // percentage text
        >
          {/* Custom branded content */}
          <div style={{
            color: '#38bdf8',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginTop: '20px',
            animation: 'pulse 1.5s infinite'
          }}>
            🚀 Loading James’ Portfolio...
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"} // your logo file
            alt="Portfolio Logo"
            style={{
              width: '80px',
              marginTop: '15px',
              animation: 'spin 3s linear infinite'
            }}
          />
        </Loader>
      </Box>
    </BrowserRouter>
  );
}

export default App;
