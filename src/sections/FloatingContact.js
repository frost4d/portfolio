import React, { useState } from 'react';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SiFiverr } from 'react-icons/si';
import { keyframes } from '@mui/system';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const FloatingContact = () => {
  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const items = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      link: 'mailto:jamespatricktsung1@gmail.com',
      color: '#38bdf8',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/james-patrick-tsung-52b796273/',
      color: '#0A66C2',
    },
    {
      icon: <SiFiverr size={28} />,
      label: 'Fiverr',
      link: 'https://www.fiverr.com/frostad_/buying?source=avatar_menu_profile',
      color: '#1DBF73',
    },
    {
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      link: 'https://api.whatsapp.com/send?phone=639054251897',
      color: '#25D366',
    },
  ];

  // 🧲 MAGNETIC EFFECT
  const handleMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
  };

  const resetMove = (el) => {
    el.style.transform = `translate(0,0) scale(1)`;
  };

  // 📱 MOBILE VERSION
  if (isMobile) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          gap: 2,
          px: 2,
          py: 1,
          borderRadius: 999,
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        {items.map((item, i) => (
          <IconButton
            key={i}
            component="a"
            href={item.link}
            target="_blank"
            sx={{
              color: item.color,
              '&:hover': {
                background: item.color,
                color: '#fff',
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}

        <style>
          {`
            @keyframes float {
              0%,100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(-6px); }
            }
          `}
        </style>
      </Box>
    );
  }

  // 🖥 DESKTOP VERSION
  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'fixed',
        top: '50%',
        left: -7,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        p: 1,
        pr: 2,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 20px 50px rgba(82, 82, 82, 0.22)',
        transition: 'all 0.4s ease',
        width: hovered ? 140 : 30,
        height: hovered ? 'auto' : 230,
        
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
                  opacity: 1,
                  transition: '0.3s',
                  filter: 'blur(2px)',
                },
      }}
    >
      {/* Vertical LET'S TALK */}
      {!hovered && (
        <Typography
        sx={{
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
          color: '#bdc7d3',
          fontSize: 14,
          userSelect: 'none',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.3s ease',
          position: 'absolute',
          left: 15,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none', // so it doesn't block mouse events
          fontWeight: '800',
          letterSpacing: .5,
          whiteSpace: 'nowrap',
          background: 'linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8, #4ccf43, #818cf8, #38bdf8)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${shimmer} 6s linear infinite`,
              minHeight: '4rem', // reserve vertical space
              fontFamily: "'Poppins', 'Quicksand', 'Montserrat', 'Comfortaa', sans-serif",
        }}
      >
        LET'S TALK
      </Typography>
      )}

      {/* Contact Icons */}
      {items.map((item, i) => (
        <Box
          key={i}
          component="a"
          href={item.link}
          target="_blank"
          rel="noopener"
          onMouseMove={(e) => handleMove(e, e.currentTarget)}
          onMouseLeave={(e) => resetMove(e.currentTarget)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            textDecoration: 'none',
            px: 1.5,
            py: 0.8,
            borderRadius: 2,
            transition: 'all 0.25s ease',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-10px)',
          }}
        >
          <IconButton
            sx={{
              color: item.color,
              background: 'rgba(255,255,255,0.05)',
              width: 36,
              height: 36,
              transition: 'all 0.2s ease',
              '&:hover': {
                background: item.color,
                color: '#fff',
              },
            }}
          >
            {item.icon}
          </IconButton>

          <Typography
            sx={{
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FloatingContact;