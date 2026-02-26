import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById('dark-section'); // adjust to your dark section's ID
      const triggerTop = triggerElement?.getBoundingClientRect().top;

      if (triggerTop && triggerTop < 80) {
        setTextColor('white');
      } else {
        setTextColor('black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
    position="sticky"
    elevation={0}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.53)', // semi-transparent background
      backdropFilter: 'blur(30px)', // blur effect
      WebkitBackdropFilter: 'blur(10px)', // for Safari support
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // subtle shadow
      transition: 'background-color 0.3s ease-in-out',
    }}
  >
  
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: textColor }}>
          My Portfolio
        </Typography>
        {['home', 'about', 'contact'].map((section) => (
          <Button
            key={section}
            onClick={() => handleScrollTo(section)}
            sx={{ color: textColor }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
