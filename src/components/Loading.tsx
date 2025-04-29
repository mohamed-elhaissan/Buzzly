import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function Loading() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % hellos.length);
        }, 2000);

        return () => clearInterval(interval); // Important to clean the interval
    }, []);

    return (
        <div className='flex h-screen items-center justify-center'>
            <AnimatePresence mode={"wait"}>

                <motion.h2
                    key={hellos[index]}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='text-4xl  text-[#ff0088]'
                >
                    {hellos[index]}
                </motion.h2>
            </AnimatePresence>
            <motion.span variants={itemVariants}
                         initial="closed"
                         animate="open"
                         exit="closed" className='fixed bottom-5 font-semibold left-1/2 -translate-x-1/2'>Loading...
            </motion.span>
        </div>
    )
}
const hellos = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo", "مرحبا", "こんにちは", "안녕하세요", "नमस्ते"];

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 200, velocity: 0 },
            ease: 'easeOut', // Smooth easing
        },
    },
    closed: {
        y: -20,
        opacity: 0,
        transition: {
            y: { stiffness: 200, velocity: 0 },
            ease: 'easeOut', // Smooth easing
        },
    },
}