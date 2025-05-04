import { motion } from "framer-motion";
import React from "react";
import { itemsVariants } from "./assets";
export default function Toast({message} : {message :string}) {


    return (
        <motion.div 
        variants={itemsVariants}
        initial="hidden"
        animate="opened"
        exit="exit"
        
        >
            {message}    
        </motion.div>
    )
}
