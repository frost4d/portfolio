import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const WorkExperience = () => {
  return (
    <Box
      id="work-experience"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h3" // bigger than h4
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
            mb: 5,
          }}
        >
          Work Experience
        </Typography>


        <Divider sx={{ my: 2 }} />
        
        <List>
          {/* Technical Support */}
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Technical Support
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Buwelo Company | October 2024 - January 20, 2026
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    • Provided technical support and troubleshooting for US-based attorneys and law firms under a CARET Tier 3 support environment. <br />
                    • Supported Abacus Private Cloud (APC) and Amicus Attorney platforms by handling advanced workflow configuration, remote desktop setup, and access-related issues. <br />
                    • Configured, monitored, and maintained client cloud infrastructure, SaaS platforms, and legal practice management tools. <br />
                    • Delivered customer service via Zendesk and GoToAssist, ensuring timely resolution of client tickets. <br />
                    • Collaborated with internal teams to improve service delivery and maintain compliance with client requirements. <br />
                    • Documented support cases and contributed to the knowledge base for recurring technical issues.
                  </Typography>
                </>
              }
            />
          </ListItem>

          <Divider sx={{ my: 2 }} />

          {/* Intern - Web/Frontend Developer */}
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Intern - Web/Frontend Developer
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Pilipinas Micro-Matrix Technology (PMT Joint Venture) Inc. | February 2024 - April 2024
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    • Developed responsive web interfaces focusing on performance, accessibility, and user experience using HTML, CSS, JavaScript, and Laravel framework. <br />
                    • Assisted in building and maintaining web application components following MVC architecture principles. <br />
                    • Participated in basic backend logic implementation and database-related tasks using Laravel-based development workflows.
                  </Typography>
                </>
              }
            />
          </ListItem>

          <Divider sx={{ my: 2 }} />

        </List>
      </Box>
    </Box>
  );
};

export default WorkExperience;