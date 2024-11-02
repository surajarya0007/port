'use client'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bat(props) {
  const { nodes, materials } = useGLTF('/models/Bat-transformed.glb')
  return (
    <group {...props} dispose={null}
    scale={[20,20,20]}
    >
      <mesh geometry={nodes.Object_2.geometry} material={materials.color_10793013} rotation={[-Math.PI / 2, 0, 0]} scale={0.008} />
    </group>
  )
}

useGLTF.preload('/models/Bat-transformed.glb')
