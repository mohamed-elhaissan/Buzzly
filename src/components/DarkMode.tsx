import {FiSun, FiMoon} from "react-icons/fi";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";


export default function DarkMode() {
    const [darkMode, setDarkMode] = useState<boolean>(false);



    useEffect(() => {
        document.body.setAttribute('data-theme',!darkMode ? 'dark' : 'light');
    }, [darkMode]);
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.6,
            }}
            transition={{duration: 0.2}}

             onClick={() => {
                setDarkMode(!darkMode)
            }}
            className='fixed cursor-pointer right-[5%] bottom-[10%] shadow-sm bg-[#FCFCFC] text-xl dark:bg-[#311151] dark:border  rounded-full text-white dark:border-[#2e2e2d]'>
            <div className='flex relative items-center justify-center  p-4 text-[#9911ff] rounded-full'>
                <AnimatePresence mode={"wait"}>

                    {
                        darkMode ? <motion.span key={"mon"} initial={{y: 10, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                exit={{y: -10, opacity: 0}}
                                                transition={{duration: 0.2}}><FiMoon/></motion.span> :
                            <motion.span key={"sun"} initial={{y: 10, opacity: 0}}
                                         animate={{y: 0, opacity: 1}}
                                         exit={{y: -10, opacity: 0}}
                                         transition={{duration: 0.2}}><FiSun/></motion.span>

                    }
                </AnimatePresence>
            </div>
        </motion.button>
    )
}

