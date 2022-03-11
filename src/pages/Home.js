import React from 'react';
import {motion,AnimatePresence} from "framer-motion";

function Home(){
    return (
        <>
        <AnimatePresence>
            <motion.div 
            initial={{x:-10}}
            animate={{x:100}}
            >
            Home
            </motion.div>
        </AnimatePresence>
        </>
    
    )
}

export default Home;