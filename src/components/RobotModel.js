import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { DRACOLoader, KTX2Loader } from "three-stdlib";
import * as THREE from "three";

// Preload model
useGLTF.preload("/models/teal/robot_draco.glb");

export default function RobotModel({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const group = useRef();

  const { scene, animations } = useGLTF(modelPath, true, true, (loader) => {
    // Draco setup
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
    loader.setDRACOLoader(dracoLoader);

    // KTX2 setup
    const ktx2Loader = new KTX2Loader()
      .setTranscoderPath("https://www.gstatic.com/ktx2/latest/")
      .detectSupport(new THREE.WebGLRenderer());
    loader.setKTX2Loader(ktx2Loader);
  });

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions || {}).forEach((action) => {
      action.reset().fadeIn(0.5).play();
    });
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}
