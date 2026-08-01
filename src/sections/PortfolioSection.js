import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Modal, Fade, Backdrop, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const designs = [
  'website1.webp',
  'website2.webp',
  'notionCalendar.webp',
  'Cocktail.mp4',
  'Cake.webp',
  'cosmeticPost.webp',
  'Halaman.webp',
  'HalamanLogo.webp',
  // 'TripToBali.mp4',
  'SeminyakSample.webp',
  'RealEstate.webp',
  'CoffeeMenu.webp',
  'YatchRental.webp',
  'LivingRoom1.webp',
  'LivingRoom2.webp',
  'LivingRoom3.webp',
  'Brochure1.webp',
  'Brochure2.webp',
  'BUSINESSCARD.webp',
];

const designLinks = [
  "https://frost4d.github.io/beach-club/",
  "https://frost4d.github.io/cosmetics-bento/",
  "https://app.notion.com/p/db4184d0c2b049e88b0ad01c36fc0288?v=4f0857e31bfb4232b6c8c23c7588fdbb&source=copy_link",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
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

  // Modal State
  const [selectedDesign, setSelectedDesign] = useState(null);

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

  const handleCloseModal = () => setSelectedDesign(null);

  const handleCardClick = (index) => {
    // If there is a live link, go directly to the website.
    // Otherwise, open the full screen modal.
    if (designLinks[index]) {
      window.open(designLinks[index], '_blank');
    } else {
      setSelectedDesign(index);
    }
  };

  return (
    <Box
      id="portfolio"
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
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ maxWidth: '1600px', mx: 'auto' }}>
        {designs.map((design, index) => (
          <Grid item xs={12} sm={6} md={3} xl={3} key={index}>
            <Box
              ref={(el) => (cardRefs.current[index] = el)}
              onContextMenu={(e) => e.preventDefault()}
              onClick={() => handleCardClick(index)}
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
                  '& .hover-full-view': { opacity: 1 },
                  '& .hover-text': { transform: 'translateY(0)' },
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

              {/* ⭐ HOVER OVERLAY (Tap to full view / Visit Website) */}
              <Box
                className="hover-full-view"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 4, // Sits below the featured overlays (zIndex 5)
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography
                  className="hover-text"
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    px: 3,
                    py: 1,
                    borderRadius: '50px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transform: 'translateY(15px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {designLinks[index] ? 'Visit Website' : 'Tap to full view'}
                </Typography>
              </Box>

              {/* ⭐ ALWAYS VISIBLE OVERLAY (ONLY WEBSITE1) */}
              {design === 'website1.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
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
                    onClick={(e) => e.stopPropagation()}
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

              {/* ⭐ ALWAYS VISIBLE OVERLAY (ONLY Cosmetics Project) */}
              {design === 'website2.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#ec4899',
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
                    Frostad Cosmetics Website
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A modern cosmetics brand showcase built with GSAP animations, immersive product storytelling, and a sleek bento‑style layout.
                  </Typography>

                  <Box
                    component="a"
                    href="https://frost4d.github.io/cosmetics-bento/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg,#ec4899,#818cf8)',
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

              {/* ⭐ ALWAYS VISIBLE OVERLAY (ONLY Cosmetics Post) */}
              {design === 'cosmeticPost.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#38f5f8',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    INSTAGRAM POST DESIGN
                  </Typography>
                </Box>
              )}

              {design === 'HalamanLogo.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#38f8bb',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    BRAND LOGO DESIGN
                  </Typography>
                </Box>
              )}

              {design === 'Brochure1.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#38f5f8',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    REAL ESTATE BROCHURE
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Front Cover Design
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A sleek, modern front cover highlighting property imagery and branding, designed to capture attention and convey professionalism at first glance.
                  </Typography>
                </Box>
              )}

              {design === 'Brochure2.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#ec4899',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    REAL ESTATE BROCHURE
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Back Cover Design
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A clean back cover layout featuring contact details, branding elements, and a polished finish to reinforce trust and credibility.
                  </Typography>
                </Box>
              )}

              {design === 'BUSINESSCARD.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#a78bfa',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    BUSINESS CARD DESIGN
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Frostad Corporate Identity
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A professional business card concept balancing modern typography with brand colors, designed for clear communication and lasting impression.
                  </Typography>
                </Box>
              )}

              {design === 'notionCalendar.webp' && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: '#a78bfa',
                      letterSpacing: 2,
                      mb: 1,
                    }}
                  >
                    CONTENT STRATEGY PROJECT
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Social Media Calendar/Content Planner
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      mb: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    A Notion-based content planner for Frostad Cosmetics, organizing posts, campaigns, and creative workflows.
                  </Typography>

                  <Box
                    component="a"
                    href="https://app.notion.com/p/db4184d0c2b049e88b0ad01c36fc0288?v=4f0857e31bfb4232b6c8c23c7588fdbb&source=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg,#a78bfa,#818cf8)',
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

      {/* LIGHTBOX MODAL */}
      <Modal
        open={selectedDesign !== null}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
          },
        }}
      >
        <Fade in={selectedDesign !== null}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
              height: '90vh',
              maxWidth: '1200px',
              maxHeight: '800px',
              bgcolor: 'transparent',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: { xs: 10, md: -40 },
                right: { xs: 10, md: -40 },
                color: '#fff',
                bgcolor: { xs: 'rgba(0,0,0,0.5)', md: 'transparent' },
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                zIndex: 10,
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </IconButton>

            {/* Expanded Media */}
            {selectedDesign !== null &&
              (designs[selectedDesign].endsWith('.mp4') ? (
                <Box
                  component="video"
                  src={process.env.PUBLIC_URL + `/assets/${designs[selectedDesign]}`}
                  autoPlay
                  loop
                  controls
                  playsInline
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 2,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + `/assets/${designs[selectedDesign]}`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 2,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                />
              ))}

            {/* Optional Project Link in Modal */}
            {selectedDesign !== null && designLinks[selectedDesign] && (
              <Box
                component="a"
                href={designLinks[selectedDesign]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  bottom: { xs: 20, md: -60 },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  background: 'linear-gradient(90deg,#00e5ff,#818cf8)',
                  color: '#000',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
                  zIndex: 10,
                }}
              >
                View Live Project
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default PortfolioSection;