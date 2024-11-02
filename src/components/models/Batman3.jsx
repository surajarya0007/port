// 'use client'
// import React, { useRef, useEffect } from 'react'
// import { useGLTF, OrbitControls } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

// export default function Batman3(props) {
//   const groupRef = useRef()
//   const { nodes, materials } = useGLTF('/models/batman3-transformed.glb')

//   // Variable to track normalized mouse position
//   const mouse = { x: 0, y: 0 }

//   // Update mouse position on mouse move
//   const handleMouseMove = (event) => {
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1 // Normalize to range -1 to 1
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1 // Normalize to range -1 to 1
//   }

//   useEffect(() => {
//     // Attach the mouse move listener to the window
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       // Cleanup the event listener on unmount
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   // Rotate the entire model based on the mouse position
//   useFrame(() => {
//     if (groupRef.current) {
//       // Calculate target rotations based on mouse coordinates
//       const targetX = mouse.x * Math.PI * 0.1 // Adjust sensitivity on x-axis
//       const targetY = mouse.y * Math.PI * 0.05 // Adjust sensitivity on y-axis

//       // Smoothly interpolate the rotation for a smooth effect
//       groupRef.current.rotation.y = THREE.MathUtils.lerp(
//         groupRef.current.rotation.y,
//         targetX,
//         0.05
//       )
//       groupRef.current.rotation.x = THREE.MathUtils.lerp(
//         groupRef.current.rotation.x,
//         -targetY - Math.PI / 2, // Set reverse initial rotation
//         0.05
//       )
//     }
//   })
//   return (
//     <group {...props} dispose={null}
//     ref={groupRef}
//     {...props}
//     >
//       <mesh geometry={nodes.Object_4.geometry} material={materials.BatmanTorso__Batman_Torso_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
//       <mesh geometry={nodes.Object_5.geometry} material={materials.BatmanFace__Batman_Face_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
//       <mesh geometry={nodes.Object_6.geometry} material={materials.BatmanEye__Batman_Eye_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
//       <mesh geometry={nodes.Object_7.geometry} material={materials.BatmanMask__Batman_Mask_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
//       <mesh geometry={nodes.Object_8.geometry} material={materials.BatmanLegs__Batman_Legs_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
//       <mesh geometry={nodes.Object_9.geometry} material={materials.BatmanCape__Batman_Cape_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
//       <mesh geometry={nodes.Object_10.geometry} material={materials.BatmanTheeth__Batman_Theeth_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
//     </group>
//   )
// }

// useGLTF.preload('/models/batman3-transformed.glb')




'use client'
import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Batman3(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/batman3-transformed.glb')

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
    
    // Initial 45-degree rotation along x-axis
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 4
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
        Math.PI / 4 - targetY, // Adjusted for initial rotation
        0.05
      )
    }
  })
  
  return (
    <group {...props} ref={groupRef} dispose={null}
    scale={[3.3, 3.3, 3.3]}
    position={[0,-2,0]}
    >
      <mesh geometry={nodes.Object_4.geometry} material={materials.BatmanTorso__Batman_Torso_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.BatmanFace__Batman_Face_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.BatmanEye__Batman_Eye_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.BatmanMask__Batman_Mask_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.BatmanLegs__Batman_Legs_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.BatmanCape__Batman_Cape_D_tga} position={[-0.011, -2.725, 0.013]} rotation={[-1.683, 0, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.BatmanTheeth__Batman_Theeth_D_tga} position={[-0.011, -2.72, -0.612]} rotation={[-1.456, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/batman3-transformed.glb')
