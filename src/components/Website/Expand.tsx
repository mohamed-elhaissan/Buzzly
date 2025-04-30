import {useState} from "react";
import {motion} from "framer-motion";
import CopyButton from "./CopyButton.tsx";


export default function () {
    const [actived, setActived] = useState<string>("default");


    return (
        <section className='w-1/3 sm:w-[80%] xl:w-1/2 2xl:w-1/3 '>
            <div>
                <h2 className='font-semibold dark:text-white  mb-2'>Expand</h2>

                <p className='dark:text-[#c1c1c6]'>You can change the amount of toasts visible through the prop.</p>

                <div className='mt-4   flex items-center gap-3  flex-wrap w-full'>
                    {
                        expands.map((item: string, index: number) => (
                            <div key={index}>
                                <button
                                    onClick={() => {
                                        setActived(item)
                                    }}
                                    style={{
                                        backgroundColor: actived === item ? "#F3F3F3" : '#fcfcfc',
                                        borderColor: actived !== item ? "#F3F3F3" : '#dbdbdb',
                                    }}
                                    className='codeText text-sm   hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border border-[#dbdbdb]'
                                >
                                    {item}
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
                                actived ? (
                                    <motion.p
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        className='codeBlock text-sm'>{`<`}<span
                                        className="text-[#D73A49]">Toaster</span> <span
                                        className='text-[#6f6f6f]'>expand=</span>{`{${actived == "expand"}`}<span
                                        className='text-[#6f6f6f]'>{`} />`}</span>
                                    </motion.p>
                                ) : <motion.p
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    className='codeBlock text-sm text-red-500'>
                                    Oops! Something went wrong
                                </motion.p>
                            }
                            <CopyButton text={`<Toaster expand={${actived == "expand"} />`}/>
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


const expands = ['default', 'expand']