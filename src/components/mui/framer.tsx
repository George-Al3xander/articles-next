"use client"
import { ListItem } from '@mui/material'
import {motion } from 'framer-motion'
import { ReactNode } from 'react'




export const AnimatedListItem = ({children,index}: {children: ReactNode, index?: number}) => (<ListItem                     
    component={motion.div}
    initial={{x: "-100vw",display:"flex",gap: ".5rem"}}
    animate={{x: 0,
        transition: {
             delay: (index ? (index * .1) : 0)
        }
    }}
    whileHover={{      
      gap: "1rem",
      cursor: "pointer",   
     
      transition: { duration: 0.3,}
    }}
    whileTap={{ scale: 0.9 }}>
        {children}
</ListItem>)


