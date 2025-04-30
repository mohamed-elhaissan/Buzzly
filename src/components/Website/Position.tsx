import {motion} from "framer-motion";
import CopyButton from "./CopyButton.tsx";
import {useState} from "react";


export default function Position() {
    const [activatedButton, setActivatedButton] = useState<string>(positions[0]);
    const [isCLickedButton, setIsCLickedButton] = useState<number>(0);
    return (
        <section className='w-1/3 mb-4 sm:w-[80%] xl:w-1/2 2xl:w-1/3'>
            <div>
                <h2 className='font-semibold  dark:text-white mb-2'>Position</h2>

                <p className='dark:text-[#c1c1c6]'>Swipe direction changes depending on the position.</p>

                <div className='mt-4   flex items-center  gap-x-3 gap-y-2 flex-wrap w-full'>
                    {
                        positions.map((position: string, index: number) => (
                            <div key={index}>
                                <button
                                    style={{
                                        backgroundColor: isCLickedButton === index ? "#F3F3F3" : '#fcfcfc',
                                        borderColor: isCLickedButton !== index ? "#F3F3F3" : '#dbdbdb',
                                    }}
                                    onClick={() => {
                                        setIsCLickedButton(index)
                                        setActivatedButton(position)
                                    }}
                                    className='codeText text-sm   hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border '
                                >
                                    {position}
                                </button>

                            </div>
                        ))

                    }
                    {
                        <motion.div variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    className='bg-[#FCFCFC] dark:bg-[#171716] dark:text-white dark:border-[#2e2e2d] border mt-5 w-full border-[#e4e4e7] flex justify-between items-center py-4 px-5 rounded'>
                            {
                                activatedButton ? (
                                    <motion.p
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        className='codeBlock text-sm'>{"<"}<span
                                        className="text-[#D73A49]">Toaster</span> position={`{"`}<span className='text-[#6f6f6f]'>{activatedButton}</span>{`"} />`}
                                    </motion.p>
                                ) : <motion.p
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    className='codeBlock text-sm text-red-500'>
                                    Oops! Something went wrong
                                </motion.p>
                            }
                            <CopyButton text={`<Toaster position="${activatedButton}" />`}/>
                        </motion.div>
                    }
                </div>
            </div>
        </section>
    )
}


const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100},
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
        },
    },
    closed: {
        y: 20,
        opacity: 0,
        transition: {
            y: {stiffness: 1000},
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
        },
    },
}
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']