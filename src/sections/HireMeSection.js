import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

// Lazy load RobotModel
const RobotModel = React.lazy(() => import("../components/RobotModel"));

const HireMeSection = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Intersection Observer for lazy loading
    const section = document.getElementById("hire-me-section");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowCanvas(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (section) observer.observe(section);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      id="hire-me-section"
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
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
              xl: "4rem",
            }, // responsive text size
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
            fontSize: "1.5rem",
            lineHeight: 2,
            maxWidth: 1200,
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
          size="large"
          href="https://calendly.com/jamespatricktsung1/30min"
          target="_blank"
          sx={{
            marginLeft: 5,
            px: 5,
            py: 1,
            borderRadius: "50px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#38bdf8,#6366f1)",
            "&:hover": {
              background: "linear-gradient(90deg,#0ea5e9,#4f46e5)",
            },
            mb: 3,
          }}
        >
          Book a Meeting
        </Button>

        <Box
          sx={{
            width: "100%",
            maxWidth: 300,
            borderBottom: "2px solid #475569",
            mb: 2,
          }}
        />

        <Typography
          component="a"
          href="mailto:jamespatricktsung1@gmail.com"
          target="_blank"
          sx={{
            paddingLeft: 8,
            color: "#38bdf8",
            fontWeight: "bold",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              color: "#0ea5e9",
            },
          }}
        >
          Let’s Work Together
        </Typography>
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
          {isMobile ? (
            // Fallback static image for mobile
            <img
              src={process.env.PUBLIC_URL + "/assets/robot-preview.png"}
              alt="Robot preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            showCanvas && (
              <Canvas
                camera={{
                  position: [0, 1.6, 5],
                  fov: 45,
                }}
              >
                <ambientLight intensity={2} />
                <directionalLight position={[5, 5, 5]} intensity={3} />
                <Environment preset="city" />

                <React.Suspense fallback={null}>
                  <RobotModel
                    modelPath={process.env.PUBLIC_URL + "/models/teal/scene.gltf"}
                    scale={2}
                    position={[0, -1.5, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                  />
                </React.Suspense>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HireMeSection;
