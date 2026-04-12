import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
// Icons
import CampaignIcon from '@mui/icons-material/Campaign';
import PublicIcon from '@mui/icons-material/Public';

import CodeIcon from '@mui/icons-material/Code';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const blink = keyframes`
  0%,100% { opacity: 1; }
  50% { opacity: 0; }
`;

const sparkle = keyframes`
  0% { opacity: 0.3; transform: scale(0.5); }
  100% { opacity: 0.3; transform: scale(2); }
`;

const sparkle2 = keyframes`
  0% { opacity: 0.2; transform: scale(0.8); }
  100% { opacity: 0.5; transform: scale(2.5); }
`;

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const Home = () => {
  const text1 = "Hi, I’m James";
  const text2 = "Your Future Social Media Manager & Web Developer";

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
  let i = 0;

  const type1 = setInterval(() => {
    setDisplayedText1(text1.slice(0, i + 1));
    i++;
    if (i === text1.length) {
      clearInterval(type1);

      let j = 0;
      const type2 = setInterval(() => {
        setDisplayedText2(text2.slice(0, j + 1));
        j++;
        if (j === text2.length) clearInterval(type2);
      }, 25);
    }
  }, 50);

  return () => clearInterval(type1);
}, []);


  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        // Removed fixed height to allow content to grow naturally
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        // background: 'linear-gradient(135deg, #0f172a, #020617)',
        background: 'linear-gradient(135deg, #020617)',
        color: '#fff',
        overflow: 'visible', // visible to avoid hiding overflow
        minHeight: '100vh', // optional for minimum full screen height
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, md: 10 },
          py: { xs: 6, md: 10 },
          // backgroundColor: '#f5f7fa',
          mt: 0, // removed negative margin
          minHeight: 'auto',
        }}
      >
        {/* <Typography
          variant="subtitle2"
          sx={{
            color: '#f4b400',
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Social Media Manager | Web Developer
        </Typography> */}
        <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              animation: `${fadeUp} 1s ease forwards`,
              minHeight: '3rem', // reserve vertical space to prevent jump
            }}
          >
            {displayedText1}
            <Box
              component="span"
              sx={{
                borderRight: '2px solid #38bdf8',
                ml: 1,
                animation: `${blink} 1s infinite`,
              }}
            />
            </Typography>
        <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 2,
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8, #4ccf43, #818cf8, #38bdf8)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeUp} 1.2s ease forwards, ${shimmer} 6s linear infinite`,
              minHeight: '4rem', // reserve vertical space
            }}
          >
            {displayedText2}
          </Typography>
        {/* Description */}
        <Typography
          sx={{
            mt: 3,
            color: '#cbd5f5',
            maxWidth: 650,
            lineHeight: 1.8,
          }}
        >
          Build a strong digital presence through strategic content and modern websites.
        </Typography>

        {/* SERVICES (Card Style) */}
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.03)',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                transform: 'translateX(10px)',
                background: 'rgba(56,189,248,0.08)',
              },

              // Glow border
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
                },
                '&:hover::before': { opacity: 1 },
            }}
          >
            <CampaignIcon sx={{ mr: 2, color: '#38bdf8' }} />
            <Typography>
              Social Media Management — Content, Growth & Engagement
            </Typography>
          </Box>

          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.03)',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                transform: 'translateX(10px)',
                background: 'rgba(129,140,248,0.08)',
              },

              // Glow border
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
                },
                '&:hover::before': { opacity: 1 },
            }}
          >
            <CodeIcon sx={{ mr: 2, color: '#818cf8' }} />
            <Typography>
              Website Development — Responsive & High-Converting Sites
            </Typography>
          </Box>

          <Box
            sx={{
              p: 2,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.03)',
              transition: '0.3s',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                transform: 'translateX(10px)',
                background: 'rgba(129,140,248,0.08)',
              },

              // Glow border
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
                },
                '&:hover::before': { opacity: 1 },
            }}
          >
            <PublicIcon sx={{ mr: 2, color: '#818cf8' }} />
            <Typography>
              Available to connect and work with clients across any time zone
            </Typography>
          </Box>
        </Stack>

        {/* Note */}
        <Typography
          sx={{
            mt: 4,
            fontSize: '0.85rem',
            color: '#94a3b8',
          }}
        >
          *Services are offered separately based on your business needs
        </Typography>

        {/* <Typography
          sx={{
            mt: 2,
            fontSize: '0.85rem',
            color: '#94a3b8',
          }}
        >
          Available to connect and work with clients across any time zone
        </Typography> */}
      </Box>

      {/* Image Section */}
      <Box
        sx={{
  flex: 1,
  position: 'relative',
  mt: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  background: 'radial-gradient(circle at center, #020617, #020617)',

  // ✨ SPARKLE LAYER
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(6px 4px at 20% 30%, rgba(255,255,255,0.9), transparent),
      radial-gradient(4px 2px at 70% 40%, rgba(247, 255, 3, 0.8), transparent),
      radial-gradient(1.5px 1.5px at 50% 80%, rgba(255,255,255,0.7), transparent),
      radial-gradient(2px 2px at 80% 70%, rgba(255,255,255,0.9), transparent),
      radial-gradient(1.5px 1.5px at 30% 60%, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 60% 20%, rgba(255, 247, 0, 0.9), transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '300px 300px',
    animation: `${sparkle} 10s ease-in infinite`,
    opacity: 0.8,
    zIndex: 0,
  },

  // 💎 SOFT GLOW (luxury feel)
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    filter: 'blur(120px)',
    zIndex: 0,
  },

  // 💎 LAYER 2 (medium glowing diamonds)
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(3px 3px at 25% 30%, rgba(255,255,255,0.9), transparent),
      radial-gradient(3px 3px at 75% 50%, rgba(255,255,255,0.8), transparent),
      radial-gradient(3px 3px at 40% 80%, rgba(251, 255, 0, 0.9), transparent),
      radial-gradient(6px 6px at 85% 75%, rgba(255,255,255,0.7), transparent),
      radial-gradient(5px 5px at 15% 60%, rgba(255,255,255,0.8), transparent)
    `,
    backgroundSize: '300px 300px',
    animation: `${sparkle2} 6s ease-in infinite`,
    opacity: 0.7,
    zIndex: 0,
  },


  '& > *': {
    position: 'relative',
    zIndex: 2,
  },

  minHeight: { xs: 800, md: 'auto' },
}}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 480,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 0,
          }}
        >
          {/* Spinning Rings */}
          <Box
            sx={{
              position: 'absolute',
              width: '102%',
              height: '110%',
              borderRadius: '50%',
              background: 'conic-gradient(#00e5ff, #6200ea, #00e5ff)',
              animation: `${spin} 3s linear infinite`,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '101%',
              height: '107%',
              borderRadius: '50%',
              background: 'conic-gradient(#00e5ff, #6200ea, #00e5ff)',
              animation: `${spin} 2s linear infinite`,
              zIndex: 0,
            }}
          />

          {/* Profile Image */}
          <Box
            component="img"
            // src="/assets/mypic1.png"
            src={process.env.PUBLIC_URL + "/assets/mypic6.png"}
            alt="James"
            sx={{
              width: '100%',
              maxWidth: 470,
              height: 'auto',
              borderRadius: '50%',
              background: '#03071b',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease-in-out',
              zIndex: 1,
              '&:hover': {
                transform: 'scale(1.01)',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;