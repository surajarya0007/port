'use client'
import React from 'react'
import ProjectLayout from './ProjectLayout'
import { motion } from 'framer-motion'

const container = {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    }
  }
}

const ProjectList = ({projects}) => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project, index) => {
            return <ProjectLayout key={project.id} {...project} />
        })}
    </motion.div>
  )
}

export default ProjectList