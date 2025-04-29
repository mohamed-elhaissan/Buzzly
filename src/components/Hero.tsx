import {Link} from "react-router-dom";


export default function Hero(){
    return (
        <section className='w-1/4'>
            <h1 className='text-6xl font-bold text-center '>Buzzly</h1>
            <p className='text-[#6f6f6f] text-center text-[17px] mt-1 mb-2  text-base'>An
                opinionated toast component for React.</p>
            <div className='flex items-center justify-center gap-5'>
                <button
                    className='bg-black cursor-pointer  py-2 px-6 text-white rounded w-full shadow-sm '>Exemple
                </button>
                <Link
                    className='bg-[#FFFFFF] cursor-pointer text-black shadow-sm py-2 px-6 text-center   rounded w-full '
                    to={'/https://github.com/mohamed-elhaissan/Buzzly'}>Github</Link>
            </div>
            <div className={'w-full text-center mt-4'}>

                <Link to={"/documentation"} className='text-[#6f6f6f]  underline '>Documentation</Link>
            </div>
        </section>
    )
}