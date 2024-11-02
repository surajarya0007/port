'use client'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Batman2(props) {
  const { nodes, materials } = useGLTF('/models/batman2-transformed.glb')
  return (
    <group 
    {...props} 
    dispose={null}
    position={[0,-9.1,0]}
    scale={[2.8,2.8,2.8]}
    rotation={[-1.3,0,0]}
    >
      <mesh geometry={nodes.Object_4.geometry} material={materials.BatmanTorso__Batman_Torso_D_tga} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.BatmanFace__Batman_Face_D_tga} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.BatmanEye__Batman_Eye_D_tga} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.BatmanMask__Batman_Mask_D_tga} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.BatmanLegs__Batman_Legs_D_tga} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.BatmanCape__Batman_Cape_D_tga} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.BatmanTheeth__Batman_Theeth_D_tga} />
    </group>
  )
}

useGLTF.preload('/models/batman2-transformed.glb')
