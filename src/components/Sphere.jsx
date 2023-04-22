import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const SphereModel = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color={"#3d1c56"}
          attach={"material"}
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default SphereModel;
