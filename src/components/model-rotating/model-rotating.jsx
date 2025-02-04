import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import styles from "./model-rotating.module.css";
import { useRef } from "react";

const RotatingModel = ({ url, scale }) => {
  const fbx = useLoader(FBXLoader, url);

  const modelRef = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (modelRef.current) modelRef.current.rotation.y = a * 0.5;
  });

  return (
    <primitive
      object={fbx}
      scale={scale}
      ref={modelRef}
      position={[0, -2, 0]}
    />
  );
};

export default function ModelRotating(props) {
  return (
    <div className={styles.canvas}>
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 6],
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <directionalLight position={[1, 1, -0.5]} intensity={2} />
        <RotatingModel {...props} />
      </Canvas>
    </div>
  );
}
