/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 models/bmo.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bmo(props) {
  const { nodes, materials } = useGLTF("./models/bmo.gltf");
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={3} />
      <pointLight intensity={7} position={[0, 0, 3]} />
      <group scale={8.943} position={[0, -3.5, -0]}>
        <group position={[0.042, 0.309, 0.069]}>
          <mesh
            geometry={nodes.Куб001_1.geometry}
            material={materials["Материал.002"]}
          />
          <mesh
            geometry={nodes.Куб001_2.geometry}
            material={materials["Материал.003"]}
          />
          <mesh
            geometry={nodes.Куб001_3.geometry}
            material={materials["Материал.004"]}
          />
          <mesh
            geometry={nodes.Куб001_4.geometry}
            material={materials["Материал.005"]}
          />
          <mesh
            geometry={nodes.Куб001_5.geometry}
            material={materials["Материал.006"]}
          />
        </group>
        <group position={[-0.005, 0.458, -0.01]}>
          <mesh geometry={nodes.Куб_1.geometry} material={materials.b1} />
          <mesh geometry={nodes.Куб_2.geometry} material={materials.b2} />
          <mesh geometry={nodes.Куб_3.geometry} material={materials.b3} />
        </group>
        <mesh
          geometry={nodes.Куб002.geometry}
          material={materials["Материал.011"]}
          position={[0.245, 0.184, -0.007]}
        />
        <mesh
          geometry={nodes.Куб003.geometry}
          material={materials["Материал.012"]}
          position={[-0.224, 0.45, -0.021]}
        />
        <mesh
          geometry={nodes.Куб004.geometry}
          material={materials["Материал.009"]}
          position={[-0.079, 0.238, 0.048]}
        />
        <mesh
          geometry={nodes.Куб005.geometry}
          material={materials["Материал.007"]}
          position={[0.018, 0.393, -0.019]}
        />
        <mesh
          geometry={nodes.Плоскость.geometry}
          material={materials["Материал.013"]}
          position={[0.024, 0.537, 0.058]}
        />
        <mesh
          geometry={nodes.Сфера002.geometry}
          material={materials["Материал.010"]}
          position={[0.017, 0.043, 0.012]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/bmo.gltf");