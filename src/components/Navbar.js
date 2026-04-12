import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const [textColor, setTextColor] = useState('white');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll for navbar background
      setScrolled(window.scrollY > 50);

      // Detect dark section for text color switch
      const triggerElement = document.getElementById('dark-section');
      const triggerTop = triggerElement?.getBoundingClientRect().top;

      if (triggerTop && triggerTop < 80) {
        setTextColor('white');
      } else {
        setTextColor(scrolled ? 'white' : 'white'); // keep white for dark theme
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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
        backgroundColor: scrolled
          ? 'rgba(15, 23, 42, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 20px rgba(0,0,0,0.3)'
          : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: textColor,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          My Portfolio
        </Typography>

        {/* Navigation Buttons */}
        {['home', 'about', 'contact'].map((section) => (
          <Button
            key={section}
            onClick={() => handleScrollTo(section)}
            sx={{
              color: textColor,
              position: 'relative',
              fontWeight: 500,
              mx: 1,
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 0,
                height: '2px',
                bottom: 4,
                left: 0,
                backgroundColor: '#38bdf8',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;