import {motion} from "framer-motion";
import CopyButton from "./CopyButton.tsx";
import {useState} from "react";


export default function Position() {
    const [activatedButton, setActivatedButton] = useState<string>(positions[0]);
    const [isCLickedButton, setIsCLickedButton] = useState<number>(0);
    return (
        <section className='w-1/3 mt-20'>
            <div>
                <h2 className='font-semibold  mb-2'>Position</h2>

                <p>Swipe direction changes depending on the position.</p>

                <div className='mt-6 mb-50  flex items-center  gap-x-3 gap-y-2 flex-wrap w-full'>
                    {
                        positions.map((position: string, index: number) => (
                            <div key={index}>
                                <button
                                    style={{
                                        backgroundColor: isCLickedButton === index ? "#F3F3F3" : '#fcfcfc',
                                    }}
                                    onClick={() => {
                                        setIsCLickedButton(index)
                                        setActivatedButton(position)
                                    }}
                                    className='codeText text-sm   hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border border-[#f3f3f3]'
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
                                    className='bg-[#FCFCFC] border mt-5 w-full border-[#e4e4e7] flex justify-between items-center py-4 px-5 rounded'>
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