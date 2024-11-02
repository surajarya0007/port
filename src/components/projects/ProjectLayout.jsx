// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import React from 'react'

// const item = {
//   hidden: {opacity: 0, y:100},
//   show: {opacity: 1, y:0}
// }

// const NavLink = motion(Link)

// const ProjectLayout = ({name, description, date, demoLink, imageurl}) => {
//   return (
//     <NavLink 
//     variants={item}
//     href={demoLink}
//     target={'_blank'}
//     className='text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
//         <div className='flex flex-col items-center justify-center space-x-2'>
//             <h1 className='text-foreground'>{name}</h1>
//             <p className='text-muted hidden sm:inline-block'>{description}</p>
//         </div>
//         <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
//         <p className="text-muted sm:text-foreground">
//         {new Date(date).toDateString()}
//       </p>
//     </NavLink>
//   )
// }

// export default ProjectLayout



// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import React from 'react';

// const item = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 },
// };

// const NavLink = motion(Link);

// const ProjectLayout = ({ name, description, date, demoLink, imageurl }) => {
//   return (
//     <NavLink
//       variants={item}
//       href={demoLink}
//       target="_blank"
//       className="text-sm md:text-base flex flex-col items-center justify-between w-1/2 h-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg group"
//     >
//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center space-x-2 relative z-10">
//         <h1 className="text-foreground">{name}</h1>
//         <p className="text-muted hidden sm:inline-block">{description}</p>
//       </div>
//       <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted z-10" />
//       <p className="text-muted sm:text-foreground z-10">{new Date(date).toDateString()}</p>

//       {/* Hover Image Overlay */}
//       <motion.img
//         src={imageurl}
//         alt={`${name} preview`}
//         className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
//       />

//       {/* Overlay Background for Dim Effect */}
//       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out rounded-lg" />
//     </NavLink>
//   );
// };

// export default ProjectLayout;


import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, imageurl }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex flex-col items-center justify-between w-full h-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg group"
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center space-x-2 relative z-10">
        <h1 className=" transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 text-accent">{name}</h1>
        <p className="text-muted hidden sm:inline-block transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted z-10" />
      <p className="text-muted sm:text-foreground z-10 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">{new Date(date).toDateString()}</p>

      {/* Hover Image Overlay */}
      <motion.img
        src={imageurl}
        alt={`${name} preview`}
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      />

      {/* Overlay Background for Dim Effect */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out rounded-lg" />
    </NavLink>
  );
};

export default ProjectLayout;