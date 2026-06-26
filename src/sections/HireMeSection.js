import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import RobotModel from "../components/RobotModel";

const HireMeSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 4, md: 10 },
        py: 0,
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          flex: 1,
          pr: { md: 6 },
          textAlign: "justify",
        }}
      >
        <Typography
          sx={{
            color: "#38bdf8",
            fontWeight: 700,
            letterSpacing: 3,
            mb: 2,
          }}
        >
          CONGRATULATIONS 🎉
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 3,
            background:
              "linear-gradient(90deg,#38bdf8,#818cf8,#4ade80,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Now Hire Me
          <br />
          as Your
          <br />
          Work Partner
        </Typography>

        <Typography
          sx={{
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: 2,
            maxWidth: 600,
            mb: 5,
          }}
        >
          You've seen what I can build. Imagine what we can accomplish
          together. I help businesses automate workflows, create engaging
          content, manage operations, and build modern digital experiences that
          convert visitors into customers.
        </Typography>

        <Button
          variant="contained"
          size="medium"
          href="https://www.linkedin.com/in/james-patrick-tsung-52b796273/"
          target="_blank"
          sx={{
            px: 5,
            py: 2,
            borderRadius: "50px",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg,#38bdf8,#6366f1)",
            "&:hover": {
              background:
                "linear-gradient(90deg,#0ea5e9,#4f46e5)",
            },
          }}
        >
          Let's Work Together
        </Button>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          flex: 1,
          mt: { xs: 6, md: 0 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            height: 600,
            overflow: "hidden",
          }}
        >
          <Canvas
            camera={{
              position: [0, 1.6, 5],
              fov: 45,
            }}
          >
            {/* Lights */}
            <ambientLight intensity={2} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={3}
            />

            {/* HDR Environment */}
            <Environment preset="city" />

            {/* Robot */}
            <RobotModel
  modelPath={process.env.PUBLIC_URL + "/models/teal/scene.gltf"}
  scale={2}
  position={[0, -1.5, 0]}
  rotation={[0, Math.PI / 4, 0]}
/>


            {/* Mouse Controls */}
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
            />
          </Canvas>
        </Box>
      </Box>
    </Box>
  );
};

export default HireMeSection;