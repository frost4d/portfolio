import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Grid() {
  const groupRef = useRef();
  const planeRef = useRef();
  
  // We use gl to get the actual canvas DOM element's position on screen
  const { camera, raycaster, gl } = useThree();
  const mouse = useRef(new THREE.Vector2(-9999, -9999));
  
  const gridSize = 180;
  const spacing = 2;

  // Listen to global mouse events so it works even if other HTML elements are on top
  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = gl.domElement.getBoundingClientRect();
      // Calculate mouse position relative to the canvas specifically
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // If mouse is inside the canvas area, convert to Normalized Device Coordinates (-1 to 1)
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.current.x = (x / rect.width) * 2 - 1;
        mouse.current.y = -(y / rect.height) * 2 + 1;
      } else {
        mouse.current.set(-9999, -9999); // Off-screen
      }
    };

    const handleMouseLeave = () => {
      mouse.current.set(-9999, -9999);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [gl.domElement]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const points = [];
    for (let x = -gridSize; x < gridSize; x += spacing) {
      for (let y = -gridSize; y < gridSize; y += spacing) {
        points.push(x, y, 0);
      }
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [gridSize, spacing]);

  const uniforms = useMemo(
    () => ({
      time: { value: 0.0 },
      color1: { value: new THREE.Color(0xff00ff) }, // magenta
      color2: { value: new THREE.Color(0xffd700) }, // gold
      mousePos: { value: new THREE.Vector3(9999, 9999, 0) }, 
      interactionRadius: { value: 35.0 }, // Increased size of the interaction crater
      interactionForce: { value: -20.0 }  // Increased push depth
    }),
    []
  );

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        uniform float time;
        uniform vec3 mousePos;
        uniform float interactionRadius;
        uniform float interactionForce;
        varying float vZ;
        
        void main() {
          vec3 pos = position;
          
          // Calculate distance from point to mouse
          float dist = distance(pos.xy, mousePos.xy);
          
          // Create interaction effect
          float interaction = smoothstep(interactionRadius, 0.0, dist) * interactionForce;

          // Mountain waves
          float wave = sin(pos.x * 0.07 + time * 0.4) * cos(pos.y * 0.07 + time * 0.3);
          float ridge = sin(pos.x * 0.03) * 2.0; 
          
          // Combine natural height with mouse interaction
          pos.z = (abs(wave + ridge) * 8.0) + interaction; 
          
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
          // Adjusted color mixing so the crater turns purely magenta at the bottom
          float mixVal = clamp((vZ + 20.0) / 40.0, 0.0, 1.0);
          vec3 color = mix(color1, color2, mixVal);
          gl_FragColor = vec4(color, 0.8);
        }
      `,
      transparent: true
    });
  }, [uniforms]);

  useFrame(({ clock }) => {
    uniforms.time.value = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = -1.4; // tilt toward viewer
      groupRef.current.rotation.z += 0.0003;
    }

    // Manually shoot a raycast every frame using our global mouse position
    if (planeRef.current && mouse.current.x !== -9999) {
      raycaster.setFromCamera(mouse.current, camera);
      const intersects = raycaster.intersectObject(planeRef.current);
      
      if (intersects.length > 0) {
        // Find exactly where the ray hit the invisible plane, and convert it to local space
        const localPoint = groupRef.current.worldToLocal(intersects[0].point.clone());
        uniforms.mousePos.value.copy(localPoint);
      } else {
        uniforms.mousePos.value.set(9999, 9999, 0);
      }
    } else {
      uniforms.mousePos.value.set(9999, 9999, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <points args={[geometry, material]} />
      {/* Invisible plane for our manual raycaster to hit against */}
      <mesh ref={planeRef}>
        <planeGeometry args={[gridSize * 2, gridSize * 2]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
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