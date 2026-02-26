import React from 'react';
import { Box, Typography, Link, Stack, Divider, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiFiverr, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#1a1a1a',
        color: '#ccc',
        py: 6,
        px: 2,
        mt: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', maxWidth: 1000 }}>
            I'm a Cloud Technical Support Specialist and Web Developer providing reliable remote support, virtualization expertise, and modern web solutions for businesses worldwide.
          </Typography>
        </Grid>

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
            borderColor: '#333',
            mx: 2,
          }}
        />

        {/* Links Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#home" underline="hover" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
              Home
            </Link>
            <Link href="#about" underline="hover" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
              About
            </Link>
            <Link href="#contact" underline="hover" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
              Contact
            </Link>
          </Stack>
        </Grid>

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
            borderColor: '#333',
            mx: 2,
          }}
        />

        {/* Contact Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
            Connect with Me
          </Typography>
          <Stack direction="row" spacing={2}>
            {/* <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}
            >
              <GitHubIcon />
            </Link> */}
            <Link
              href="https://www.linkedin.com/in/james-patrick-tsung-52b796273/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#ccc', '&:hover': { color: '#0A66C2' } }}
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.fiverr.com/frostad_/buying?source=avatar_menu_profile"
              target="_blank"
              rel="noopener"
              sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}
            >
              <SiFiverr size={28} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=639054251897"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#ccc', '&:hover': { color: '#25D366' } }}
            >
              <SiWhatsapp size={20} />
            </Link>
            <Link
              href="mailto:jamespatricktsung1@gmail.com"
              sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}
            >
              <EmailIcon />
            </Link>
          </Stack>
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Typography
        variant="body2"
        align="center"
        sx={{ color: '#666', mt: 5 }}
      >
        © {new Date().getFullYear()} James Patrick Tsung. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
