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


function App() {
  return (
    <BrowserRouter basename= "/portfolio">
    <Box sx={{ overflow: 'hidden' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Skills />
            <WorkExperience />
            <EducationalBackground />
            <DeviceSpecification/>
            <Contact />
          </>
        } />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
      </Routes>
      <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
