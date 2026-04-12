import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import { keyframes } from '@mui/system';

// Glow animation
const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const WorkExperience = () => {
  return (
    <Box
      id="work-experience"
      sx={{
        minHeight: '100vh',
        background: '#020617',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 8,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 6,
            background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Work Experience
        </Typography>

        <Stack spacing={4}>

          {/* 🔵 BUWELO EXPERIENCE */}
          <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 3,
    p: 3,
    borderRadius: 4,
    background: 'rgba(255,255,255,0.03)',
    position: 'relative',
    overflow: 'hidden',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-6px)',
      background: 'rgba(129,140,248,0.08)',
    },

    // 🔥 LEFT ACCENT BAR
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '4px',
      background: 'linear-gradient(#38bdf8, #818cf8)',
    }
  }}
>
  {/* LEFT LOGOS */}
  {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> */}
  <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    gap: 2,
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
    width: { xs: '100%', md: 'auto' },
  }}
>
    <Box
      component="img"
      src={process.env.PUBLIC_URL + "/assets/Buwelo.png"}
      alt="Buwelo"
      // sx={{ maxWidth: 200, objectFit: 'contain', borderRadius: 2 }}
      sx={{
  width: { xs: 120, sm: 150, md: 200 }, // 👈 keeps 200 on desktop
  height: 'auto',
  objectFit: 'contain',
  borderRadius: 2,
}}
    />
    <Box
      component="img"
      src={process.env.PUBLIC_URL + "/assets/Caret.png"}
      alt="CARET"
      // sx={{ maxWidth: 200, objectFit: 'contain', borderRadius: 2 }}
      sx={{
  width: { xs: 120, sm: 150, md: 200 }, // 👈 keeps 200 on desktop
  height: 'auto',
  objectFit: 'contain',
  borderRadius: 2,
}}
    />
  </Box>

  {/* RIGHT CONTENT */}
  <Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
      Technical Support Specialist (Cloud & SaaS)
    </Typography>

    <Typography sx={{ color: '#94a3b8', mb: 2 }}>
      Buwelo Company • Oct 2024 – Jan 2026
    </Typography>

    <Typography sx={{ lineHeight: 1.8, color: '#cbd5f5' }}>
      • Delivered Tier 3 technical support for US-based attorneys and law firms <br />
      • Specialized in <strong>Abacus Private Cloud (APC)</strong> and <strong>Amicus Attorney</strong> systems <br />
      • Managed and supported <strong>Account CARET</strong> environments, including workflows and user access <br />
      • Troubleshot cloud infrastructure, SaaS platforms, and remote desktop environments <br />
      • Resolved complex technical issues with high accuracy and fast turnaround time <br />
      • Handled client communication and ticket resolution via Zendesk & GoToAssist <br />
      • Contributed to internal documentation and knowledge base for recurring issues <br />
      • Ensured system stability, security, and performance for legal practice platforms
    </Typography>

    {/* TAGS */}
    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {["APC", "Amicus", "CARET", "Zendesk", "Cloud Support", "SaaS"].map((tag) => (
        <Box
          key={tag}
          sx={{
            position: 'relative',
            px: 1.5,
            py: 0.5,
            fontSize: 12,
            borderRadius: 2,
            background: 'rgba(56,189,248,0.15)',
            border: '1px solid rgba(56,189,248,0.2)',

            // Glow border
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '2px',
                  background:
                    'linear-gradient(90deg, rgb(56, 189, 248), rgb(129, 140, 248), rgb(236, 72, 153), rgb(129, 140, 248), rgb(56, 189, 248))',
                  backgroundSize: '200%',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  animation: `${glowMove} 6s linear infinite`,
                  opacity: 0,
                  transition: '0.3s',
                },
                '&:hover::before': { opacity: 1 },
                '&:hover': {
                  boxShadow: '0 5px 10px rgba(99,102,241,0.35)',
                },
          }}
        >
          {tag}
        </Box>
      ))}
    </Box>
  </Box>
</Box>

          {/* 🟣 PMTI EXPERIENCE */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              p: 3,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.03)',
              position: 'relative',
              overflow: 'hidden',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                background: 'rgba(129,140,248,0.08)',
              },

              // 🔥 LEFT ACCENT BAR
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '4px',
                background: 'linear-gradient(#38bdf8, #818cf8)',
              }
            }}
          >
            {/* LEFT LOGO */}
            <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    gap: 2,
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
    width: { xs: '100%', md: 'auto' },
  }}
>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/assets/Pmti.png"}
                alt="PMTI"
                sx={{ width: { xs: 120, sm: 150, md: 200 }, // 👈 keeps 200 on desktop
  height: 'auto',
  objectFit: 'contain', borderRadius: 2 }}
              />
            </Box>

            {/* RIGHT CONTENT */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Web / Frontend Developer Intern
              </Typography>

              <Typography sx={{ color: '#94a3b8', mb: 2 }}>
                PMT Joint Venture Inc. • Feb 2024 – Apr 2024
              </Typography>

              <Typography sx={{ lineHeight: 1.8, color: '#cbd5f5' }}>
                • Built responsive UI using HTML, CSS, JavaScript <br />
                • Worked with Laravel (MVC architecture) <br />
                • Assisted backend & database integration <br />
                • Improved performance & user experience
              </Typography>

              {/* TAGS */}
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {["React", "Laravel", "UI/UX", "Frontend"].map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      position: 'relative',
                      px: 1.5,
                      py: 0.5,
                      fontSize: 12,
                      borderRadius: 2,
                      background: 'rgba(56,189,248,0.15)',
                      border: '1px solid rgba(56,189,248,0.2)',

                      // Glow border
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '2px',
                  background:
                    'linear-gradient(90deg, rgb(56, 189, 248), rgb(129, 140, 248), rgb(236, 72, 153), rgb(129, 140, 248), rgb(56, 189, 248))',
                  backgroundSize: '200%',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  animation: `${glowMove} 6s linear infinite`,
                  opacity: 0,
                  transition: '0.3s',
                },
                '&:hover::before': { opacity: 1 },
                '&:hover': {
                  boxShadow: '0 5px 10px rgba(99,102,241,0.35)',
                },
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

        </Stack>
      </Box>
    </Box>
  );
};

export default WorkExperience;