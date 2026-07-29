import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Grid() {
  const mesh = useRef();
  const gridSize = 180;
  const spacing = 2;
  const geometry = new THREE.BufferGeometry();
  const points = [];

  // Create a wide grid
  for (let x = -gridSize; x < gridSize; x += spacing) {
    for (let y = -gridSize; y < gridSize; y += spacing) {
      points.push(x, y, 0);
    }
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      color1: { value: new THREE.Color(0xff00ff) }, // magenta
      color2: { value: new THREE.Color(0xffd700) }  // gold
    },
    vertexShader: `
      uniform float time;
      varying float vZ;
      void main() {
        vec3 pos = position;
        // Create mountain-like terraces
        float wave = sin(pos.x * 0.07 + time * 0.4) * cos(pos.y * 0.07 + time * 0.3);
        float ridge = sin(pos.x * 0.03) * 2.0; // adds terrace ridges
        pos.z = abs(wave + ridge) * 8.0; // exaggerate height for mountain feel
        vZ = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 1.1;
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying float vZ;
      void main() {
        float mixVal = vZ / 14.0;
        vec3 color = mix(color1, color2, mixVal);
        gl_FragColor = vec4(color, 0.8);
      }
    `,
    transparent: true
  });

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime();
    mesh.current.rotation.x = -1.4; // tilt toward viewer
    mesh.current.rotation.z += 0.0003;
  });

  return <points ref={mesh} args={[geometry, material]} />;
}

export default function NeonGridBackground() {
  return (
    <Canvas
      camera={{ position: [0, 10, 130], fov: 60 }}
      style={{ position: "absolute", top: '10%', left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.7} />
      <Grid />
    </Canvas>
  );
}
