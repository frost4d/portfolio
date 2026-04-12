import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Divider } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import Laptop3D from '../components/Laptop3D';
import LaptopGallery from '../components/LaptopGallery';
import { keyframes } from '@mui/system';

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

const DeviceSpecification = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#020617',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: 8,
        display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
      }}
    >

      {/* <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ py: 4 }}>
        Remote Work Device Specification
      </Typography> */}
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
              Remote Work Device Specification
            </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: 1200, lineHeight: 1.8 }}>
        Great results don’t happen by chance—they’re backed by the right tools. My workstation is engineered to handle demanding workloads, fast turnarounds, and real-time collaboration—so your business never slows down.
      </Typography>

      <LaptopGallery />

      <Card 
      elevation={4} 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 3, 
        maxWidth: 1400, 
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)', 
        color: '#fff',
        border: '2px solid rgb(44, 47, 113)',
        // RGB Glow Border
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
                  zIndex: 3,
                },
                '&:hover::before': { opacity: 1 },
        }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <LaptopMacIcon color="warning" />
                <Typography variant="h6">Device Model</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                ASUS Vivobook Pro OLED
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <MemoryIcon color="warning" />
                <Typography variant="h6">Processor</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                AMD Ryzen 9 5900HX
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <DeveloperBoardIcon color="warning" />
                <Typography variant="h6">Graphics</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                NVIDIA GeForce RTX 3050
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <MemoryIcon color="warning" />
                <Typography variant="h6">Memory</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                16GB RAM
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <StorageIcon color="warning" />
                <Typography variant="h6">Storage</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Samsung SSD 990 EVO Plus 2TB (PCIe 4.0 x4)
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography
  variant="h5"
  gutterBottom
  sx={{ textAlign: "center", fontWeight: 600, mb: 4 }}
>
  Professional Remote Work Capabilities
</Typography>

<Box
  display="flex"
  gap={1.5}
  flexWrap="wrap"
  justifyContent="center"
>
  <Chip label="High-Performance Multitasking (Ryzen 9 Powered)" color="success" />
  <Chip label="Handles Multiple Applications Simultaneously" color="success" />
  <Chip label="Virtual Assistant & Administrative Ready" color="success" />
  <Chip label="Web Development & Modern Site Deployment Ready" color="success" />
  <Chip label="Social Media Management & Content Scheduling Optimized" color="success" />
  <Chip label="Video Conferencing & Screen Sharing Optimized" color="success" />
  <Chip label="Content Creation & Media Editing Capable" color="success" />
  <Chip label="Production-Level Remote Work Setup" color="success" />
</Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeviceSpecification;