import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function LaptopModel() {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mouse.x * 0.5;
      meshRef.current.rotation.x = mouse.y * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.3, 3]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 1, -1.3]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[4, 2.5, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Screen Display */}
      <mesh position={[0, 1, -1.18]} rotation={[0.4, 0, 0]}>
        <planeGeometry args={[3.7, 2.2]} />
        <meshStandardMaterial color="#111" emissive="#00e5ff" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

export default function Laptop3D() {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <LaptopModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}