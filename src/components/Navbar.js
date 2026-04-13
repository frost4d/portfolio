import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const [textColor, setTextColor] = useState('white');
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background effect
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
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
            cursor: "pointer"
          }}
          onClick={() => handleScrollTo("home")}
        >
          My Portfolio
        </Typography>

        {/* Navigation Buttons */}
        {[ 'services', 'portfolio', 'about', 'contact'].map((section) => (
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