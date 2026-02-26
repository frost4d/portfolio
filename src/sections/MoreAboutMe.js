import React from 'react';
import { Box, Typography, Button, Stack, Chip, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MoreAboutMe = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        flexDirection: 'column',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        More About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#444',
          lineHeight: 1.8,
          maxWidth: 800,
          mb: 4,
        }}
      >
        I’m James, a detail-oriented <strong>Frontend Developer</strong> and a <strong>Cloud Engineer</strong> with over <strong>1 year of experience</strong>,
        currently working at <strong>Buwelo</strong>.
        <br /><br />
        I specialize in delivering modern, responsive web applications using technologies like <strong>React</strong>, <strong>Material UI</strong>,
        <strong> Chakra UI</strong>, <strong>Bootstrap</strong>, and <strong>Laravel</strong>. My passion lies in crafting sleek, user-friendly interfaces that improve both usability and accessibility.
        <br /><br />
        In my current cloud engineering role, I work within the <strong>Abacus Private Cloud (APC)</strong> environment — optimizing system performance, setting up and maintaining <strong>Remote Desktop Protocol (RDP)</strong> sessions,
        and supporting cloud-based legal and financial applications such as <strong>Amicus Attorney</strong>, <strong>Lacerte Tax</strong>, <strong>QuickBooks</strong>, and <strong>Microsoft 365</strong> programs.
        <br /><br />
        I’m also involved in daily cloud operations including user management through <strong>Microsoft Partner Center</strong> and <strong>Active Directory</strong>, cloud troubleshooting, and proactive system maintenance.
        <br /><br />
        I'm continuously expanding my skill set in <strong>AWS</strong>, <strong>Azure</strong>, and <strong>CI/CD pipelines</strong> — with a long-term goal of becoming a full-fledged <strong>DevOps Engineer</strong> focused on automation, scalability, and infrastructure as code.
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
            <Chip label="React" avatar={<Avatar src="/assets/icons/react.png" />} />
            <Chip label="Material UI" avatar={<Avatar src="/assets/icons/mui.png" />} />
            <Chip label="Laravel" avatar={<Avatar src="/assets/icons/laravel.png" />} />
            <Chip label="Abacus Cloud" avatar={<Avatar src="/assets/icons/cloud.png" />} />
            <Chip label="Microsoft 365" avatar={<Avatar src="/assets/icons/m365.png" />} />
            <Chip label="CI/CD" avatar={<Avatar src="/assets/icons/cicd.png" />} />
          </Stack>

         {/* Placeholder for Certifications */}
         <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 1 }}>
            📜 Certifications & Ongoing Learning:
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
            • Currently pursuing AWS & DevOps courses  
            <br />
            • Hands-on experience with cloud automation & deployment
          </Typography>

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#f4b400',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#d49f00' },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default MoreAboutMe;
