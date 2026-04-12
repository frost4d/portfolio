import React, { useState } from "react";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { keyframes } from "@mui/system";

// 🔥 Glow animation
const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

// ✨ Soft floating animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const images = [
  process.env.PUBLIC_URL + "/assets/vivobook.png",
  process.env.PUBLIC_URL + "/assets/vivobook2.png",
  process.env.PUBLIC_URL + "/assets/vivobook3.png",
  process.env.PUBLIC_URL + "/assets/vivobook4.png",
  process.env.PUBLIC_URL + "/assets/vivobook5.png",
];

const LaptopGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 6 },
        // mb: 10,
      }}
    >
      {/* 💻 MAIN IMAGE CONTAINER */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          p: 2,
          // background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* ✨ Glow background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background:
              "radial-gradient(circle at center, rgba(56,189,248,0.15), transparent 70%)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />

        {/* 💻 IMAGE */}
        <Tilt
          scale={1.05}
          transitionSpeed={2500}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1200}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="Vivobook Pro"
            sx={{
              position: "relative",
              zIndex: 2,
              width: { xs: 280, md: 600 },
              animation: `${float} 6s ease-in-out infinite`,
              transition: "all 0.4s ease",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7))",
            }}
          />
        </Tilt>
      </Box>

      {/* 🧩 THUMBNAILS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 4,
          p: 15,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        {images.map((img, index) => {
          const isActive = selectedImage === img;

          return (
            <Box
              key={index}
              onClick={() => setSelectedImage(img)}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",

                transform: isActive ? "scale(1.08)" : "scale(1)",
                opacity: isActive ? 1 : 0.6,

                "&:hover": {
                  transform: "scale(1.1)",
                  opacity: 1,
                },

                // 🔥 GLOW BORDER
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  padding: "2px",
                  background:
                    "linear-gradient(90deg, #38bdf8, #818cf8, #ec4899, #818cf8, #38bdf8)",
                  backgroundSize: "200%",
                  animation: `${glowMove} 5s linear infinite`,
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  opacity: isActive ? 1 : 0,
                  transition: "0.3s",
                },
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={img}
                alt={`thumbnail-${index}`}
                sx={{
                  width: 100,
                  display: "block",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default LaptopGallery;