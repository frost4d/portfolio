import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const designs = [
  'website1.png',
  'Cocktail.mp4',
  'Cake.png',
  'Coffee.png',
  'TripToBali.mp4',
  'SeminyakSample.png',
  'Yatch.png',
  'Mood.png',
];

const designLinks = [
  "https://frost4d.github.io/beach-club/",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const PortfolioSection = () => {
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
      {/* TITLE */}
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
        Creative Portfolio & Design Showcase
      </Typography>

      <Typography sx={{ textAlign: 'center', color: '#94a3b8', mb: 8 }}>
        Explore a collection of website, visual, and content designs built to capture attention, spark creativity, and bring ideas to life.
      </Typography>

      {/* GRID */}
      <Grid container spacing={4} justifyContent="space-evenly">
        {designs.map((design, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.6s ease',
                transform: inViewArray[index]
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                opacity: inViewArray[index] ? 1 : 0,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',

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
              {/* MEDIA */}
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
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + `/assets/${design}`}
                  sx={{
                    maxWidth: '400px',
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
              )}

              {/* ⭐ ALWAYS VISIBLE OVERLAY (ONLY WEBSITE1) */}
              {design === 'website1.png' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                    // background:
                    //   'linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.4), transparent)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#00e5ff',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    FEATURED PROJECT
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Beach Club Website Experience
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A modern luxury nightlife landing page designed for high-impact visual storytelling, immersive motion, and premium user experience.
                  </Typography>

                  <Box
                    component="a"
                    href="https://frost4d.github.io/beach-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      background:
                        'linear-gradient(90deg,#00e5ff,#818cf8)',
                      color: '#000',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      width: 'fit-content',
                      bottom: 30,
                      position: 'absolute',
                    }}
                  >
                    View Live Project
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;