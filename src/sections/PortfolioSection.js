import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

// RGB glow animation
const rgbGlow = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

// Fade-up animation
const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

// Sample designs
const designs = [
  'Coffee.png',
  'Cocktail.mp4',
  'Cake.png',
  'TripToBali.mp4',
  'SeminyakSample.png',
  'Yatch.png',
  'Mood.png',
];

const PortfolioSection = () => {
  // Create refs for each card
    const cardRefs = useRef([]);
    const [inViewArray, setInViewArray] = useState(
      Array(designs.length).fill(false)
    );
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = cardRefs.current.indexOf(entry.target);
            if (entry.isIntersecting && index !== -1) {
              setInViewArray((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
  
      cardRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
  
      return () => {
        cardRefs.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    }, []);

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 4, md: 12 },
        background: '#020617',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 800,
          mb: 2,
          background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Sample Designs
      </Typography>
      <Typography sx={{ textAlign: 'center', color: '#94a3b8', mb: 8 }}>
        Here are some of my social media posts and content designs to showcase creativity and style.
      </Typography>

      {/* Grid of designs */}
      <Grid container spacing={4} justifyContent= 'space-evenly'>
        {designs.map((design, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                // animation: `${fadeUp} 0.8s ease forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                cursor: 'pointer',
                height: '500px',     
                display: 'flex',     
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.6s ease',
                transform: inViewArray[index] ? 'translateY(0)' : 'translateY(40px)',
                opacity: inViewArray[index] ? 1 : 0,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',

                // RGB Glow Border
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '6px',
                  background:
                    'linear-gradient(90deg, rgb(56, 189, 248), rgb(129, 140, 248), rgb(236, 72, 153), rgb(129, 140, 248), rgb(56, 189, 248))',
                  backgroundSize: '200%',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  animation: `${glowMove} 6s linear infinite`,
                  opacity: 0,
                  transition: '0.3s',
                  filter: 'blur(2px)',
                  zIndex: 3,
                },
                '&:hover::before': { opacity: 1 },
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.03)',
                  boxShadow: '0 25px 50px rgba(99,102,241,0.35)',
                },
              }}
            >
              {design.endsWith('.mp4') ? (
  <Box
    component="video"
    src={process.env.PUBLIC_URL + `/assets/${design}`}
    autoPlay
    loop
    muted
    playsInline
    sx={{
      maxWidth: '400px',
      position: 'relative',
      zIndex: 1,
      objectFit: 'cover',
    }}
  />
) : (
  <Box
    component="img"
    src={process.env.PUBLIC_URL + `/assets/${design}`}
    alt={`Design ${index + 1}`}
    sx={{
      maxWidth: '400px',
      objectFit: 'cover',
      position: 'relative',
      zIndex: 1,
      transition: 'transform 0.3s ease',
    }}
  />
)}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;