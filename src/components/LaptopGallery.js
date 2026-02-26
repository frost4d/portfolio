import React, { useState } from "react";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";

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
        // background: "radial-gradient(circle at center, #0a0a0f 0%, #000 70%)",
        mb: 8,
        textAlign: "center",
      }}
    >
      {/* Main Image with Parallax Tilt */}
      <Tilt
        // glareEnable={true}
        // glareMaxOpacity={0.25}
        scale={1.05}
        transitionSpeed={2500}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Vivobook Pro 15 OLED"
          sx={{
            width: { xs: 280, md: 600 },
            transition: "all 0.4s ease",
            filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.6))",
          }}
        />
      </Tilt>

      {/* Thumbnail Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 6,
          flexWrap: "wrap",
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`thumbnail-${index}`}
            onClick={() => setSelectedImage(img)}
            sx={{
              width: 100,
              cursor: "pointer",
              borderRadius: 2,
              transition: "all 0.3s ease",
              border:
                selectedImage === img
                  ? "2px solid #000000"
                  : "2px solid transparent",
              opacity: selectedImage === img ? 1 : 0.6,
              "&:hover": {
                opacity: 1,
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LaptopGallery;