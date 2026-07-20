import React, { useState } from "react";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { keyframes } from "@mui/system";

const glowMove = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 200%; }
`;

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
        mb: 6,
      }}
    >
      {/* 💻 MAIN IMAGE */}
      <Box
        sx={{
          borderRadius: 4,
          p: { xs: 1, sm: 2 },
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
              width: { xs: 240, sm: 300, md: 600 },
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
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          justifyItems: "center",
        }}
      >
        {images.map((img, index) => {
          const isActive = selectedImage === img;
          return (
            <Box
              key={index}
              onClick={() => setSelectedImage(img)}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.08)" : "scale(1)",
                opacity: isActive ? 1 : 0.6,
                "&:hover": { transform: "scale(1.1)", opacity: 1 },
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
              <Box
                component="img"
                src={img}
                alt={`thumbnail-${index}`}
                sx={{
                  width: { xs: 80, sm: 100, md: 120 },
                  display: "block",
                  borderRadius: 2,
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
