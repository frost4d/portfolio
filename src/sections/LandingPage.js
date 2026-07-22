// LandingPage.js
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import RobotModel from "../components/RobotModel";

const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const LandingPage = () => {
  const text1 = "Hi, I’m James";
  const text2 = "Combine Tech, Strategy, and Creativity to Grow Your Brand";
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");

  useEffect(() => {
    let i = 0;
    const type1 = setInterval(() => {
      setDisplayedText1(text1.slice(0, i + 1));
      i++;
      if (i === text1.length) {
        clearInterval(type1);
        let j = 0;
        const type2 = setInterval(() => {
          setDisplayedText2(text2.slice(0, j + 1));
          j++;
          if (j === text2.length) clearInterval(type2);
        }, 25);
      }
    }, 50);
    return () => clearInterval(type1);
  }, []);

  return (
    <Box id="home" sx={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #020617,#0f172a, #020617)',
      color: '#fff',
    }}>
      {/* Hero Section */}
      <Box sx={{
        pt: '10px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
      }}>
        {/* LEFT SIDE */}
        <Box sx={{
          flex: 1,
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, md: 12 },
          py: { xs: 8, md: 0 },
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 800,
            mt: 2,
            lineHeight: 1.2,
            background: 'linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8, #4ccf43, #818cf8, #38bdf8)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${fadeUp} 1.2s ease forwards, ${shimmer} 6s linear infinite`,
            minHeight: '4rem',
            textAlign: 'center',
          }}>
            {displayedText2}
          </Typography>

          <Typography sx={{
            mt: 3,
            color: '#cbd5f5',
            lineHeight: 1.8,
            textAlign: 'center',
            fontSize: "1.3rem"
          }}>
            I help businesses stay consistent, organized, and visible online by managing their social media and handling essential daily operations — so they can focus on scaling.
          </Typography>

          <Typography sx={{
            background: 'linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8, #4ccf43, #818cf8, #38bdf8)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${fadeUp} 1.2s ease forwards, ${shimmer} 6s linear infinite`,
            letterSpacing: 2,
            fontSize: '0.8rem',
            fontWeight: 'bold',
            mt: 4,
            textAlign: 'center'
          }}>
            [ DIGITAL GROWTH SYSTEM ]
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 5, justifyContent: 'center' }}>
            <Button
              variant="contained"
              href="https://www.linkedin.com/in/james-patrick-tsung-52b796273/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
                px: 4,
                fontWeight: 'bold',
                '&:hover': { background: 'linear-gradient(90deg, #0ea5e9, #4f46e5)' },
              }}
            >
              Connect with me
            </Button>
            <Button
              variant="outlined"
              href={process.env.PUBLIC_URL + "/resume/James_Patrick_Tsung_Resume.pdf"}
              download="James_Patrick_Tsung_Resume.pdf"
              sx={{
                borderColor: '#38bdf8',
                color: '#38bdf8',
                px: 4,
                '&:hover': { borderColor: '#0ea5e9', color: '#0ea5e9' },
              }}
            >
              Download my Resume
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE - 3D Model */}
        <Box sx={{
          flex: 1,
          mt: { xs: 6, md: 0 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          position: "relative"
        }}>
          <Box sx={{ width: "100%", maxWidth: 1200, height: 600, overflow: "hidden" }}>
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 5], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Environment preset="city" />
                <RobotModel
                  modelPath={process.env.PUBLIC_URL + "/models/teal/robot_draco.glb"}
                  scale={1.3}
                  position={[0, -1.4, 0]}
                  rotation={[0, Math.PI / 4, 0]}
                />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
            {/* ✅ Loader overlay scoped to 3D model */}
            <Loader
              containerStyles={{ backgroundColor: 'transparent' }}
              barStyles={{ backgroundColor: '#38bdf8'}}
              dataStyles={{ color: '#fff', fontWeight: 'bold', fontSize: '.7rem' }}
              dataInterpolation={() => `Rendering 3D model`}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
