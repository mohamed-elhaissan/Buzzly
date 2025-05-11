import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export default function Hero() {
    // const useBuzzly = useBuzzly();
    // console.log(useBuzzly());

    return (
        <section className='sm:w-[80%]  lg:w-1/2 xl:w-1/3 2xl:w-1/3 '>

            <h1 className='text-6xl font-bold text-center dark:text-[#F8F8F8] '>Buzzly</h1>
            <p className='text-[#6f6f6f] text-center text-[17px] mt-1 mb-2  text-base dark:text-[#767676]'>A simple yet powerful toast component for your React apps.</p>
            <div className='flex items-center justify-center gap-5'>
                <button

                    className='bg-black cursor-pointer dark:bg-[#181818] dark:border dark:border-[#5c5c5c]   dark:border-none dark:font-semibold  py-2 px-6 text-white rounded w-1/2 shadow-sm  hover:opacity-75 '>Exemple
                </button>
                <motion.button className='w-1/2 '
                >
                    <Link
                        style={{
                            background: 'linear-gradient(to top, #f8f8f8, #fcfcfc 8px)'
                        }}
                        className='githubButton dark:bg-[#9911FF]  dark:font-semibold hover:opacity-75 cursor-pointer fontPoppins   text-black shadow-sm py-2 px-6 text-center flex items-center justify-center gap-1  rounded w-full '
                        to={'https://github.com/mohamed-elhaissan/Buzzly'}
                        target={"_blank"}>
                        Github

                    </Link>
                </motion.button>
            </div>
            <div className={'w-full text-center mt-4'}>

                <Link to={"/documentation"} className='text-[#6f6f6f]  underline '
                     >Documentation</Link>
            </div>
        </section>
    )
}
