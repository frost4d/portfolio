import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';

const bigBackgroundShapes = [
  { icon: <AutoAwesomeIcon sx={{ color: '#38bdf8', fontSize: 120, opacity: 0.15 }} />, top: '15%', left: '65%', rotate: 0, delay: 0 },
  { icon: <CampaignIcon sx={{ color: '#f472b6', fontSize: 140, opacity: 0.15 }} />, top: '75%', left: '80%', rotate: 45, delay: 2 },
  { icon: <CodeIcon sx={{ color: '#818cf8', fontSize: 100, opacity: 0.15 }} />, top: '18%', left: '82%', rotate: -30, delay: 1 },
  { icon: <ChatIcon sx={{ color: '#facc15', fontSize: 130, opacity: 0.15 }} />, top: '78%', left: '55%', rotate: -15, delay: 0 },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <Box
      id="about"
      sx={{
        minHeight: '90vh',
        px: { xs: 4, md: 10 },
        py: { xs: 15, md: 12 },
        background: '#020617',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Big moving background shapes */}
      {bigBackgroundShapes.map((item, index) => (
        <motion.div
          key={index}
          animate={{ x: ['0%', '20%', '-10%', '0%'], rotate: [item.rotate, item.rotate + 20, item.rotate - 15, item.rotate] }}
          transition={{ duration: 15 + index * 5, repeat: Infinity, delay: item.delay, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <Stack
        component={motion.div}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        direction={{ xs: 'column', md: 'row' }}
        spacing={10}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: '100%', width: '100%', position: 'relative', zIndex: 1 }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src={process.env.PUBLIC_URL + '/assets/mypic2.png'}
          alt="James Profile"
          sx={{
            width: { xs: '100%', md: 600 },
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            borderRadius: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        />

        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderBottom: '3px solid #f4b400',
                display: 'inline-block',
                mb: 4,
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: '#ffffff', lineHeight: 1.8, mb: 3, textAlign: 'justify' }}
            >
              Hi! I’m <strong style={{ color: '#f4b400' }}>James Patrick Tsung</strong>, your future Social Media Manager & Web Developer passionate about helping businesses shine online. I create <strong>eye-catching content</strong>, engaging visuals, and <strong>responsive websites</strong> that leave a lasting impression.

              <br /><br />

              I’m familiar with <strong>Facebook, Instagram, TikTok</strong>, and other social media platforms. From crafting scroll-stopping posts to designing sleek, modern websites, I make your brand <strong>visible, consistent, and memorable</strong>.

              <br /><br />

              I also bring <strong>over a year of experience as a Cloud Technical Support Specialist</strong>, supporting US-based attorneys and law firms. I excel at troubleshooting, managing cloud applications, and ensuring systems run smoothly. I now apply this expertise to help businesses like yours grow online with smooth, professional websites and social media management.

              <br /><br />

              My goal? To combine creativity, technical expertise, and results-driven design to help your business grow online. Let’s make your digital presence unforgettable!
            </Typography>
          </motion.div>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;