'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Bat2(props) {
  const { nodes, materials } = useGLTF('/models/bat2-transformed.glb')
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group 
    {...props} 
    dispose={null} 
    ref={modelRef}
    scale={[2,2,2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.002']}
        position={[0, 0.041, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />  
    </group>
  )
}

useGLTF.preload('/models/bat2-transformed.glb')
