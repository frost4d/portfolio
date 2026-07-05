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
import { Loader } from "@react-three/drei";

function App() {
  return (
    <BrowserRouter basename= "/portfolio">
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
            <DeviceSpecification/>
            <HireMeSection />
            <Contact />
          </>
        } />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
      </Routes>
      <Footer />
      <Loader
          containerStyles={{ backgroundColor: '#020617' }} // background
          barStyles={{ backgroundColor: '#38bdf8' }}       // progress bar color
          dataStyles={{ color: '#fff', fontWeight: 'bold' }} // percentage text
        />
      </Box>
    </BrowserRouter>
  );
}

export default App;
