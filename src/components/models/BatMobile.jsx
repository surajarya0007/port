'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function BatMobile(props) {
  const { nodes, materials } = useGLTF('/models/batmobile-transformed.glb')
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group 
    {...props} 
    dispose={null}
    ref={modelRef}
    position={[2,-6,-18]}
    rotation={[3,-0.5,0]}
    scale={[-1.4,-1.4,-1.4]}
    >
      <group name="Sketchfab_Scene">
        <mesh
          name="Plane031_Black_Body_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Black_Body_0.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Black Body_0' }}
        />
        <mesh
          name="Plane031_Wheel_Rubber_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Wheel_Rubber_0.geometry}
          material={materials.PaletteMaterial002}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Wheel Rubber_0' }}
        />
        <mesh
          name="Plane031_Pressure_Dial_1_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Pressure_Dial_1_0.geometry}
          material={materials.PaletteMaterial003}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Pressure Dial 1_0' }}
        />
        <mesh
          name="Plane031_White_Paint_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_White_Paint_0.geometry}
          material={materials.PaletteMaterial004}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_White Paint_0' }}
        />
        <mesh
          name="Plane031_Default_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Default_0.geometry}
          material={materials.PaletteMaterial005}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Default_0' }}
        />
        <mesh
          name="Plane031_Chrome_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Chrome_0.geometry}
          material={materials.Chrome}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Chrome_0' }}
        />
        <mesh
          name="Plane031_Windscreen_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Windscreen_0.geometry}
          material={materials.PaletteMaterial006}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Windscreen_0' }}
        />
        <mesh
          name="Plane031_Wheel_Rim_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Wheel_Rim_0.geometry}
          material={materials.PaletteMaterial007}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Wheel Rim_0' }}
        />
        <mesh
          name="Plane031_Blue_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Blue_0.geometry}
          material={materials.PaletteMaterial008}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Blue_0' }}
        />
        <mesh
          name="Plane031_Mellow_Blue_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Mellow_Blue_0.geometry}
          material={materials.PaletteMaterial009}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Mellow Blue_0' }}
        />
        <mesh
          name="Plane031_Material001_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Material.001_0' }}
        />
        <mesh
          name="Plane031_Texture_0"
          castShadow
          receiveShadow
          geometry={nodes.Plane031_Texture_0.geometry}
          material={materials.Texture}
          position={[-0.0926838, 2.0697508, 0.2452742]}
          rotation={[-1.5338626, 0.3418115, 3.0317998]}
          scale={[-0.8535576, 0.0186618, 1.3976785]}
          userData={{ name: 'Plane.031_Texture_0' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/batmobile-transformed.glb')
