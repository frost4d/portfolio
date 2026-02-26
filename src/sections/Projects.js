import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { title: 'Project One', image: 'https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg', description: 'A cool project' },
  { title: 'Project Two', image: 'https://images.pexels.com/photos/1379627/pexels-photo-1379627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Another cool project' },
  { title: 'Project Three', image: 'https://images.pexels.com/photos/1537875/pexels-photo-1537875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Another cool project' },
  { title: 'Project Four', image: 'https://images.pexels.com/photos/7170768/pexels-photo-7170768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Another cool project' },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <Box
      id= "projects"
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fffff',
        color: 'black',
        py: 10,
        px: 0,
        width: "100%",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={1} mt={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                backgroundColor: '#1c1c1e',
                color: 'white',
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', md: 752.2 }, height: 600 }}
                image={project.image}
                alt={project.title}
              />
              {/* <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1">{project.description}</Typography>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
