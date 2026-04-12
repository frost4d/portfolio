import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Glow animation
const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const ServicesSection = () => {
  const services = [
    {
      title: 'Social Media Management',
      desc: 'I handle your content planning, posting, and strategy so your brand stays active, consistent, and growing.',
      icon: <CampaignIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Content Creation',
      desc: 'I design eye-catching posts and write captions that grab attention and turn viewers into customers.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Engagement & Community',
      desc: 'I respond to comments, DMs, and build real connections with your audience to increase trust and loyalty.',
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Virtual Assistant',
      desc: 'I take care of your daily tasks, emails, and admin work so you can focus on scaling your business.',
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    },
    {
    title: 'Web Development',
    desc: 'I build responsive, modern websites that convert visitors into customers and showcase your brand.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'SEO & Analytics',
    desc: 'I optimize your website and content for search engines and track performance to maximize growth.',
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
  },
  ];

  // Create refs for each card
  const cardRefs = useRef([]);
  const [inViewArray, setInViewArray] = useState(
    Array(services.length).fill(false)
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
    <Box sx={{ py: 12, px: { xs: 4, md: 12 }, background: '#020617', color: '#fff' }}>
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
        What I Can Do For You
      </Typography>

      <Typography
        sx={{
          textAlign: 'center',
          color: '#94a3b8',
          mb: 8,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Transforming your ideas into eye-catching content, stunning websites, and results-driven strategies that make your brand unforgettable.
      </Typography>

      {/* CARDS */}
      <Grid container spacing={6} justifyContent="space-between">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
            <Box
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                width: '100%',
                maxWidth: 560,
                position: 'relative',
                p: 4,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                transition: 'all 0.6s ease',
                transform: inViewArray[index] ? 'translateY(0)' : 'translateY(40px)',
                opacity: inViewArray[index] ? 1 : 0,

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
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.03)',
                  boxShadow: '0 25px 50px rgba(99,102,241,0.35)',
                },
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={2}
                  sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2, md: 0 } }}
                >
                  <Box sx={{ color: '#38bdf8' }}>{service.icon}</Box>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ color: '#cbd5f5', lineHeight: 1.7, mb: 3 }}>
                    {service.desc}
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      color: '#38bdf8',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      px: 0,
                      '&:hover': { color: '#818cf8', background: 'transparent' },
                    }}
                  >
                    Get Started →
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;