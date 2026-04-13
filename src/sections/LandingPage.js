// LandingPage.js
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import { keyframes } from '@mui/system';

// Splash animation
const splash = keyframes`
  0% {
    transform: scale(0.5) rotate(-20deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

// Floating animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const rgbGlow = keyframes`
  0%   { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
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

const LandingPage = () => {
  const socialImages = [
    '/assets/Facebook.png',
    '/assets/Instagram.png',
    '/assets/Tiktok.png',
    '/assets/Canva.png',
  ];

// ✅ Ref array
  const imgRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const el = imgRefs.current[index];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 15;
    const rotateY = ((x - midX) / midX) * -15;

    const moveX = (x - midX) * 0.15;
    const moveY = (y - midY) * 0.15;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translate(${moveX}px, ${moveY}px)
      scale(1.08)
    `;

    el.style.boxShadow = `
      ${-moveX}px ${-moveY}px 30px rgba(255,0,150,0.6),
      ${moveX}px ${moveY}px 40px rgba(0,200,255,0.6)
    `;
  };

  const handleMouseLeave = (index) => {
    const el = imgRefs.current[index];
    if (!el) return;

    el.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) translate(0,0) scale(1)';
    el.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  };

  const text1 = "Hi, I’m James";
const text2 = "Combine Tech, Strategy, and Creativity to Grow Your Brand";

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
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #020617,#0f172a, #020617)',
        color: '#fff',
      }}
    >
      {/* <Navbar /> */}

      {/* Main Hero Section */}
      <Box
        sx={{
          pt: '10px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            zIndex: 2,
            display: 'flex',          
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 4, md: 12 },
            py: { xs: 8, md: 0 },
          }}
        >
          {/* <Typography sx={{ color: '#38bdf8', letterSpacing: 2, fontSize: '0.8rem', mb: 2, textAlign: 'center' }}>
            [ DIGITAL GROWTH SYSTEM ]
          </Typography> */}

          {/* FIRST HEADING */}
            {/* <Typography
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
            </Typography> */}

          {/* SECOND HEADING */}
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
              textAlign: 'center',
            }}
          >
            {displayedText2}
          </Typography>

          <Typography sx={{ mt: 3, color: '#cbd5f5', maxWidth: 610, lineHeight: 1.8, textAlign: 'center' }}>
            I help businesses stay consistent, organized, and visible online by
            managing their social media and handling essential daily operations — so they can focus on scaling.
          </Typography>

          <Typography sx={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8, #4ccf43, #818cf8, #38bdf8)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeUp} 1.2s ease forwards, ${shimmer} 6s linear infinite`, letterSpacing: 2, fontSize: '0.8rem', fontWeight: 'bold', mt: 4, textAlign: 'center' }}>
            [ DIGITAL GROWTH SYSTEM ]
          </Typography>

          {/* <Box sx={{ mt: 4 }}>
            <Typography sx={{ mb: 1 }}>⚡ Social Media Management</Typography>
            <Typography sx={{ mb: 1 }}>⚡ Content Creation & Scheduling</Typography>
            <Typography sx={{ mb: 1 }}>⚡ Engagement & Community Management</Typography>
            <Typography sx={{ mb: 1 }}>⚡ Virtual Assistant & Admin Support</Typography>
          </Box> */}

          <Stack direction="row" spacing={2} sx={{ mt: 5, justifyContent: 'center' }}>
           <Button
            variant="contained"
            href="https://www.linkedin.com/in/james-patrick-tsung-52b796273/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
              px: 4,
              fontWeight: 'bold',
              '&:hover': { background: 'linear-gradient(90deg, #0ea5e9, #4f46e5)' },
            }}
          >
            Connect with me
          </Button>

            <Button
              variant="outlined"
              href={process.env.PUBLIC_URL + "/resume/James_Patrick_Tsung_Resume.pdf"}
              download="James_Patrick_Tsung_Resume.pdf"
              sx={{
                borderColor: '#38bdf8',
                color: '#38bdf8',
                px: 4,
                '&:hover': { borderColor: '#0ea5e9', color: '#0ea5e9' },
              }}
            >
              Download my Resume
            </Button>
          </Stack>

          {/* <Typography sx={{ mt: 4, fontSize: '0.8rem', color: '#64748b', letterSpacing: 1 }}>
            [ STATUS: AVAILABLE FOR WORK ]
          </Typography> */}
        </Box>

        {/* RIGHT SIDE (Social Images) */}
        <Box
          sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: 0,
            placeItems: 'center',
            position: 'relative',
            p: 2,
            mb: 0,
            zIndex: 1,
          }}
        >
          {/* Glow Background */}
          <Box
            sx={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: '#6366f1',
              filter: 'blur(120px)',
              opacity: 0.4,
              pointerEvents: 'none',
            }}
          />

          {socialImages.map((img, index) => (
    <Box
      key={index}
      sx={{
        animation: `${splash} 0.8s ease forwards`,
        animationDelay: `${index * 0.2}s`,
        opacity: 0,
      }}
    >
      <Box
        ref={(el) => (imgRefs.current[index] = el)}
        component="img"
        src={process.env.PUBLIC_URL + img}
        alt={img.split('/').pop().split('.')[0]}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={() => handleMouseLeave(index)}
        sx={{
          width: 200,
          height: 200,
          objectFit: 'contain',
          borderRadius: 4,
          position: 'relative',
          zIndex: 1,
          

          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',

          transform: 'perspective(900px)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          willChange: 'transform',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-5px',
            borderRadius: 'inherit',
            background: 'linear-gradient(45deg, red, orange, yellow, green, cyan, blue, violet)',
            zIndex: -1,
            filter: 'blur(20px)',
            opacity: 0.7,
            animation: `${rgbGlow} 6s linear infinite`,
          },
        }}
      />
    </Box>
  ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;