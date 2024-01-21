/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\Gdsc.gltf 
*/

import React from "react";
import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";

export function Gdsc(props) {
  const { nodes, materials } = useGLTF("./models/Gdsc.gltf");
  return (
    <group {...props} dispose={null}>
      <PresentationControls>
        <Stage environment={"city"} intensity={0.5} shadows={false}>
          <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={0.5}
            floatingRange={[0, 0.8]}
          >
            <directionalLight position={[1, 1, 2]} intensity={0.5} />
            <mesh
              geometry={nodes.Curve001.geometry}
              material={materials["SVGMat.002"]}
              position={[-1.945, 0.6, 0]}
              rotation={[1.582, 0.02, 0.008]}
              scale={37.669}
            >
              <mesh
                geometry={nodes.Curve.geometry}
                material={materials["SVGMat.001"]}
              />
              <mesh
                geometry={nodes.Curve002.geometry}
                material={materials["SVGMat.003"]}
              />
              <mesh
                geometry={nodes.Curve003.geometry}
                material={materials["SVGMat.004"]}
              />
            </mesh>
          </Float>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={"#101010"}
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("./models/Gdsc.gltf");
