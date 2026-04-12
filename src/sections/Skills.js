import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import './Skills.css';

const skills = [
  { category: 'Web Development', items: ['javascript.png', 'React.png', 'nodejs.png', 'laravel.png', 'bootstrap.png', 'css.png', 'chakraui.png', 'materialui.png'] },
  { category: 'Databases & Dev Tools', items: ['mysql.png', 'firebase.png', 'GitHub.png'] },
  { category: 'Design Tools', items: ['figma.png', 'Canva.png', 'Photoshop.png', 'capcut.png'] },
  { category: 'Cloud Platforms & Engineering', items: ['APC.png', 'AmicusAttorney.png', 'Office365.png', 'AbacusNext.png', 'PartnerCenter.png'] },
  { category: 'Customer Support Tools', items: ['Zendesk.png', 'gotoassist.png', 'MSTeams.png'] },
  { category: 'Social Media & Management', items: ['Facebook.png', 'Instagram.png', 'Tiktok.png', 'trello.png'] },
];

const Skills = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        // backgroundColor: '#f5f7fa',
        backgroundColor: '#020617',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
        color: '#fff',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          p: 4,
          borderRadius: 4,
          background: 'rgba(255,255,255,0.03)', // frosted glass effect
          backdropFilter: 'blur(10px)',
          border: '2px solid rgb(44, 47, 113)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
            mb: 3,
            background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Tools & Skills
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#94a3b8', mb: 8 }}>
        These are the tools I use to design, schedule, and manage social media content.
      </Typography>

        <Grid container spacing={4}>
          {skills.map((skillGroup, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {skillGroup.category}
              </Typography>

              {/* Infinite Carousel */}
              <Box sx={{ overflow: 'hidden', width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    animation: 'scroll 20s linear infinite',
                    width: 'max-content',
                  }}
                >
                  {skillGroup.items.concat(skillGroup.items).map((img, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      // src={`/assets/${img}`}
                      src={process.env.PUBLIC_URL + `/assets/${img}`}
                      alt={img.split('.')[0]}
                      sx={{
                        width: 350,
                        height: 150,
                        objectFit: 'contain',
                        borderRadius: 2,
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        p: 1,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
