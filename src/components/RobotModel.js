import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function RobotModel({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const group = useRef();

  const { scene, animations } = useGLTF(modelPath);

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