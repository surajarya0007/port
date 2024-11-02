'use client'
import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Batman(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/BATMAN-transformed.glb')

  // Variable to track normalized mouse position
  const mouse = { x: 0, y: 0 }

  // Update mouse position on mouse move
  const handleMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1 // Normalize to range -1 to 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1 // Normalize to range -1 to 1
  }

  useEffect(() => {
    // Attach the mouse move listener to the window
    window.addEventListener('mousemove', handleMouseMove)

    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 2
    }
    
    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Rotate the entire model based on the mouse position
  useFrame(() => {
    if (groupRef.current) {
      // Calculate target rotations based on mouse coordinates
      const targetX = mouse.x * Math.PI * 0.1 // Adjust sensitivity on x-axis
      const targetY = mouse.y * Math.PI * 0.05 // Adjust sensitivity on y-axis

      // Smoothly interpolate the rotation for a smooth effect
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY - Math.PI / 2, // Set reverse initial rotation
        0.05
      )
    }
  })

  return (
    <>
      <group
        ref={groupRef}
        {...props}
        dispose={null}
        position={[0, -11.5, 0]} // Adjusted to center in the scene
        scale={[3.3, 3.3, 3.3]} // Adjusted scale for better centering
        rotation={[-Math.PI / 2, 0, 0]} // Initial reverse 90-degree rotation on x-axis
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.BatmanTorso__Batman_Torso_D_tga}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.BatmanFace__Batman_Face_D_tga}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.BatmanEye__Batman_Eye_D_tga}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.BatmanMask__Batman_Mask_D_tga}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.BatmanLegs__Batman_Legs_D_tga}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.BatmanCape__Batman_Cape_D_tga}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.BatmanTheeth__Batman_Theeth_D_tga}
        />
      </group>
      {/* Orbit Controls for zooming and panning */}
      <OrbitControls enableZoom={true} enablePan={true} />
    </>
  )
}

useGLTF.preload('/models/BATMAN-transformed.glb')
