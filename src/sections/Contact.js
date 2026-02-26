import React, { useRef, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Stack,
  Divider,
  Alert
} from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_2c8f9yr',
        'template_456gghh',
        form.current,
        'dT84Ax9U0T6k1bK1n'
      )
      .then(
        () => {
          setStatus('success');
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus('error');
          setLoading(false);
        }
      );
  };
  return (
    <Box
      id= "contact"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          maxWidth: 1400,
          width: '100%',
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src="/assets/mypic4.png"
          alt="Contact Illustration"
          sx={{
            width: { xs: '100%', md: 640 },
            height: { xs: 'auto', md: 640 },
            objectFit: 'cover',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
          }}
        />

        {/* Contact Card */}
        <Paper
          elevation={6}
          sx={{
            p: { xs: 4, md: 6 },
            width: '100%',
            maxWidth: 900,
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            background: 'white',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333',
              mb: 4,
            }}
          >
            Contact Me
          </Typography>

          {/* INNER FLEX FOR VERTICAL DIVIDER */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
            }}
          >
            {/* LEFT SIDE - FORM */}
            {/* <Box sx={{ flex: 1 }}>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <TextField label="Name" fullWidth required />
                <TextField label="Email" type="email" fullWidth required />
                <TextField label="Subject" fullWidth required />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />

                <Button
                  variant="contained"
                  sx={{
                    background:
                      'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
                    color: 'white',
                    py: 1.2,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #3554a1 0%, #101e3a 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box> */}

            {/* FORM */}
            <Box sx={{ flex: 1 }}>
              <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <TextField name="user_name" label="Name" fullWidth required />
                <TextField name="user_email" label="Email" type="email" fullWidth required />
                <TextField name="subject" label="Subject" fullWidth required />
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    background:
                      'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
                    py: 1.2,
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <Alert severity="success">
                    Message sent successfully!
                  </Alert>
                )}

                {status === 'error' && (
                  <Alert severity="error">
                    Something went wrong. Please try again.
                  </Alert>
                )}
              </Box>
            </Box>

            {/* VERTICAL DIVIDER (Desktop Only) */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', md: 'block' } }}
            />

            {/* RIGHT SIDE - CONTACT INFO */}
            <Box sx={{ flex: 1 }}>
              <Stack spacing={3}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Get in Touch
                </Typography>

                <Typography variant="body1">
                  📧 <strong>Email:</strong>{' '}
                  <Link
                    href="mailto:jamespatricktsung1@gmail.com"
                    underline="hover"
                  >
                    jamespatricktsung1@gmail.com
                  </Link>
                </Typography>

                <Typography variant="body1">
                  📱 <strong>Phone:</strong>{' '}
                  <Link
                    href="tel:+639054251897"
                    underline="hover"
                  >
                    (+63) 9054251897
                  </Link>
                </Typography>

                <Typography variant="body1">
                  📍 <strong>Location:</strong><br />
                  Olongapo City, Zambales, Philippines
                </Typography>

                {/* GOOGLE MAP EMBED */}
    <Box
      sx={{
        width: '100%',
        height: 250,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      }}
    >
      <iframe
        title="Olongapo Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Olongapo%20City,%20Zambales,%20Philippines&output=embed"
      />
    </Box>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;