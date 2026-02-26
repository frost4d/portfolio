import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@mui/system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        // Removed fixed height to allow content to grow naturally
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#f7f7f7',
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
          backgroundColor: '#f5f7fa',
          mt: 0, // removed negative margin
          minHeight: 'auto',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: '#f4b400',
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          Cloud Technical Support and Web Developer
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
          Hi, I'm James
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#555',
            mt: 2,
            maxWidth: 800,
            lineHeight: 1.8,
            textAlign: 'justify',
          }}
        >
          I’m a <strong>Cloud Technical Support Specialist</strong> with over one year of experience assisting clients with cloud systems, software troubleshooting, and administrative tools in production environments. I excel at managing tasks efficiently, communicating clearly, and ensuring smooth daily operations for businesses and professionals.

          <br />
          <br />

          With my technical expertise and attention to detail, I am now focusing on <strong>Virtual Assistant</strong> roles, providing reliable support in scheduling, email management, client communications, and cloud-based workflows to help teams stay organized and productive.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button variant="contained" 
            color="warning" 
            component="a"
            href="/resume/James_Patrick_Tsung_Resume.pdf"
            download="James_Patrick_Tsung_Resume.pdf">
            Download my Resume
          </Button>
          <Button
            variant="outlined"
            color="warning"
            component="a"
            href="https://www.linkedin.com/in/james-patrick-tsung-52b796273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          mt: 0, // removed negative margin
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'url("https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
          '& > *': {
            position: 'relative',
            zIndex: 2,
          },
          minHeight: { xs: 800, md: 'auto' }, // ensure minimum height on mobile
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
            src="/assets/mypic1.png"
            alt="James"
            sx={{
              width: '100%',
              maxWidth: 470,
              height: 'auto',
              borderRadius: '50%',
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