import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/more-about-me');
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box
      id= "about"
      sx={{
        minHeight: '90vh',
        px: { xs: 4, md: 10 },
        py: { xs: 15, md: 12 },
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
        sx={{ maxWidth: '100%', width: '100%' }}
        marginTop={-5}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/assets/mypic2.png"}
          alt="James Profile"
          sx={{
            width: { xs: '100%', md: 600 },
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />

        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '3px solid #f4b400',
              display: 'inline-block',
              mb: 4,
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#555', lineHeight: 1.8, mb: 3, textAlign: 'justify' }}
>
            I'm a <strong style={{ color: '#f4b400' }}>Cloud Technical Support Specialist </strong> 
            with over 1 year of experience supporting US-based attorneys and law firms in cloud-based environments.

            <br /><br />

            I specialize in troubleshooting technical issues, performing 
            <strong> remote desktop setup</strong>, managing user accounts, 
            configuring cloud applications, and maintaining 
            <strong> cloud infrastructure operations</strong> to ensure smooth daily business workflows.

            <br /><br />

            I regularly work with tools such as <strong>Microsoft 365</strong>, 
            <strong> Active Directory</strong>, <strong>Zendesk</strong>, and remote support platforms 
            while providing efficient technical assistance to end users.

            <br /><br />

            I also have experience supporting applications in private cloud environments, 
            performing system maintenance, and assisting users with software such as 
            <strong> Amicus Attorney</strong>, <strong> Lacerte Tax</strong>, and 
            <strong> QuickBooks</strong>, ensuring proper documentation and fast issue resolution.

            <br /><br />

            With strong communication skills, attention to detail, and a proactive mindset, 
            I am expanding my career toward remote technical support and virtual assistant roles 
            that combine cloud technology expertise with administrative and operational support.
          </Typography>

        </Box>
      </Stack>
    </Box>
  );
};

export default About;