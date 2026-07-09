import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  LinearProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const navItems = ['services', 'portfolio', 'about', 'contact'];

  return (
    <>
      {/* Scroll Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          zIndex: 1300,
          backgroundColor: 'transparent',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#38bdf8',
          },
        }}
      />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: 'white',
              fontWeight: 600,
              letterSpacing: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleScrollTo('home')}
          >
            My Portfolio
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile &&
            navItems.map((section) => (
              <Button
                key={section}
                onClick={() => handleScrollTo(section)}
                sx={{
                  color: 'white',
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
                  '&:hover::after': { width: '100%' },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}

          {/* Book a Meeting CTA (Desktop only) */}
          {!isMobile && (
            <Button
              variant="contained"
              href="https://calendly.com/jamespatricktsung1/30min"
              target="_blank"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: '50px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg,#38bdf8,#6366f1)',
                '&:hover': {
                  background: 'linear-gradient(90deg,#0ea5e9,#4f46e5)',
                },
              }}
            >
              Book a Meeting
            </Button>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    width: 180,
                    height: 'auto',
                    background: 'linear-gradient(180deg, #020617, #020617bc)',
                    color: 'white',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '0 0 0 18px',
                    overflow: 'hidden',
                  },
                }}
              >
                <Box
                  sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}
                >
                  <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{ color: 'white' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  {navItems.map((section, index) => (
                    <ListItem
                      button
                      key={section}
                      onClick={() => handleScrollTo(section)}
                      sx={{
                        opacity: 0,
                        animation: `fadeIn 0.4s ease ${index * 0.1}s forwards`,
                        '@keyframes fadeIn': {
                          from: { opacity: 0, transform: 'translateX(20px)' },
                          to: { opacity: 1, transform: 'translateX(0)' },
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          section.charAt(0).toUpperCase() + section.slice(1)
                        }
                        sx={{
                          px: 2,
                          transition: 'color 0.3s ease',
                          '&:hover': { color: '#38bdf8' },
                        }}
                      />
                    </ListItem>
                  ))}

                  {/* Book a Meeting CTA (Mobile Drawer) */}
                  <ListItem
                    button
                    onClick={() =>
                      (window.location.href =
                        'https://calendly.com/jamespatricktsung1/30min')
                    }
                    sx={{
                      mt: 2,
                      mb: 2,
                      justifyContent: 'center',
                      background: 'linear-gradient(90deg,#38bdf8,#6366f1)',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: 'linear-gradient(90deg,#0ea5e9,#4f46e5)',
                      },
                    }}
                  >
                    <ListItemText
                      primary="Book a Meeting"
                      sx={{ textAlign: 'center', color: '#fff' }}
                    />
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
