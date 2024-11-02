import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Batman4(props) {
  const { nodes, materials } = useGLTF('/models/Batman4-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.BatmanTorso__Batman_Torso_D_tga}
        position={[-0.011, -2.725, 0.013]}
        rotation={[-1.683, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.BatmanFace__Batman_Face_D_tga}
        position={[-0.011, -2.72, -0.612]}
        rotation={[-1.456, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.BatmanEye__Batman_Eye_D_tga}
        position={[-0.011, -2.72, -0.612]}
        rotation={[-1.456, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.BatmanMask__Batman_Mask_D_tga}
        position={[-0.011, -2.72, -0.612]}
        rotation={[-1.456, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.BatmanLegs__Batman_Legs_D_tga}
        position={[-0.011, -2.725, 0.013]}
        rotation={[-1.683, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.BatmanCape__Batman_Cape_D_tga}
        position={[-0.011, -2.725, 0.013]}
        rotation={[-1.683, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.BatmanTheeth__Batman_Theeth_D_tga}
        position={[-0.011, -2.72, -0.612]}
        rotation={[-1.456, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/Batman4-transformed.glb')
