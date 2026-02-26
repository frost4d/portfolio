import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationalBackground = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Stack
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      direction={{ xs: 'column', md: 'row' }}
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '90vh',
        px: { xs: 4, md: 10 },
        py: { xs: 15, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      {/* Graduation Image */}
      <Box
        component="img"
        // src="/assets/gradpic.png"
        src={process.env.PUBLIC_URL + "/assets/gradpic.png"}
        alt="Graduation"
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
            mb: 3,
          }}
        >
          Educational Background
        </Typography>

        <Typography
  variant="body1"
  sx={{ color: '#555', lineHeight: 1.8, mb: 3, textAlign: 'justify' }}
>
  I earned my <strong style={{ color: '#f4b400' }}>
    Bachelor of Science in Computer Science
  </strong> from <strong>Gordon College</strong> in 2025.
  <br /><br />

  Throughout my 4-year academic journey, I developed a strong
  foundation in <strong>software engineering principles</strong>,
  <strong> object-oriented programming</strong>,
  <strong> algorithms</strong>, and
  <strong> data structures</strong>.
  <br /><br />

  I worked on multiple academic and personal projects involving
  <strong> full-stack web development</strong>,
  <strong> database management</strong>, and
  <strong> system design</strong>. These projects enhanced my ability
  to design scalable applications, write clean and maintainable code,
  and solve complex technical problems efficiently.
  <br /><br />

  In addition, I gained hands-on experience with
  <strong> modern web technologies</strong>,
  <strong> cloud-based environments</strong>, and
  <strong> virtualization concepts</strong>, preparing me to work in
  real-world development and IT infrastructure settings.
  <br /><br />

  My education not only strengthened my technical skills but also
  improved my <strong>critical thinking</strong>,
  <strong> collaboration</strong>, and
  <strong> adaptability</strong> — qualities essential for thriving
  in fast-paced technology environments.
</Typography>
      </Box>
    </Stack>
  );
};

export default EducationalBackground;