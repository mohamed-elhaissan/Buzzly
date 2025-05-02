import {useState} from "react";
import CopyButton from "./CopyButton.tsx";
import {motion} from "framer-motion";


interface TypesSnippet {
    name: string,
    snippet: string
}

const Types = () => {
    const [isActivatedButton, setIsActivatedButton] = useState<TypesSnippet>(allTypes[0]);
    const [isCLickedButton, setIsCLickedButton] = useState<number>(0);


    return (
        <section className='w-1/3 mb-4 sm:w-[80%] xl:w-1/2 2xl:w-1/3'>
            <div>
                <h2 className='font-semibold  mb-2 dark:text-white'>Types</h2>

                <p className='dark:text-[#c1c1c6]'>You can customize the type of toast you want to render, and pass an options object as the
                    second argument.</p>

                <div className='mt-4   flex items-center gap-3  flex-wrap w-full'>
                    {
                        allTypes.map((type: any, index: number) => (
                            <div key={index}>
                                <button
                                    onClick={() => {
                                        setIsCLickedButton(index)
                                        setIsActivatedButton(type)
                                    }}
                                    style={{
                                        backgroundColor: isCLickedButton === index ? "#F3F3F3" : '#fcfcfc',
                                        borderColor: isCLickedButton !== index ? "#F3F3F3" : '#dbdbdb',
                                    }}
                                    className='codeText text-sm dark:text-black    hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border border-[#f3f3f3]'
                                >
                                    {type.name}
                                </button>

                            </div>
                        ))

                    }
                    {
                        <motion.div variants={itemVariants}
                                    style={{
                                        background: 'linear-gradient(to top, #f8f8f8, #fcfcfc 8px)'
                                    }}
                                    initial="closed"
                                    animate="open"
                                    className='bg-[var(--codeBackground)] dark:bg-[#171716]   dark:border-[#2e2e2d] border mt-5 w-full border-[#e4e4e7] flex justify-between items-center py-4 px-5 rounded'>
                            {
                                isActivatedButton.snippet ? (
                                    <motion.p
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        className='codeBlock text-sm'><span
                                        className="text-[#D73A49]">toast</span>{isActivatedButton.snippet}
                                    </motion.p>
                                ) : <motion.p
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    className='codeBlock text-sm text-red-500'>
                                    Oops! Something went wrong
                                </motion.p>
                            }
                            <CopyButton text={isActivatedButton.snippet}/>
                        </motion.div>
                    }
                </div>
            </div>
        </section>

    )
}
export default Types;

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

const allTypes = [
    {
        name: 'Default',
        snippet: `('Event has been created')`,

    },
    {
        name: 'Description',
        snippet: `.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,

    },
    {
        name: 'Success',
        snippet: `.success('Event has been created')`,
    },
    {
        name: 'Info',
        snippet: `.info('Be at the area 10 minutes before the event time')`,
    },
    {
        name: 'Warning',
        snippet: `.warning('Event start time cannot be earlier than 8am')`,
    },
    {
        name: 'Error',
        snippet: `.error('Event has not been created')`,
    },]