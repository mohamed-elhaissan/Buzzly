import {Link} from "react-router-dom";
import {useCallback, useState} from "react";
import {BiCheck} from 'react-icons/bi';
const Home = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    // this function for copy button !
    const copyText = useCallback(() => {
        navigator.clipboard.writeText('npm install Buzzly').then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        }).catch(() => {
            console.log("error")
        })
    }, [isCopied])


    // this section for style the code block


    return (
        <div className='flex items-center justify-start  flex-col   h-screen'>
            <div className='w-full flex flex-col items-center justify-center mt-52 '>
                <section className='w-1/4'>
                    <h1 className='text-6xl font-bold text-center '>Buzzly</h1>
                    <p className='text-[#6f6f6f] text-center text-[20px] mt-1 mb-2  text-base'>An
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
                <section className='w-1/3 mt-10'>
                    <div>
                        <h2 className='font-semibold text-black mb-2'>Installation</h2>
                        <div
                            className='bg-[#FCFCFC] border border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded'>
                            <p className='codeBlock'><span className='text-[#6F42C1]'>npm</span> install Buzzly </p>
                            {
                                isCopied ? <BiCheck className='text-green-500 rounded'/> :
                                    <svg onClick={copyText} className='cursor-pointer' viewBox="0 0 24 24" width="14"
                                         height="14" stroke="currentColor" stroke-width="1.5"
                                         stroke-linecap="round" stroke-linejoin="round" fill="none"
                                         shape-rendering="geometricPrecision">
                                        <path
                                            d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                                    </svg>
                            }
                        </div>
                    </div>
                </section>
                <section className='w-1/3 mt-20'>
                    <div>
                        <h2 className='font-semibold  mb-2'>Usage</h2>

                        <p>Render the toaster in the root of your app.</p>

                        <div
                            className='bg-[#FCFCFC] border border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded'>
                            <div>
                                <p className='codeBlock'><span
                                    className='text-[#D73A49] font-semibold codeBlock'>import</span> {"      { Toaster, Toast }    "}
                                    <span
                                        className='text-[#D73A49] font-semibold codeBlock'>from</span> {"   'Buzzly'  "}
                                </p>
                                <p className='my-3'>{"// ..."}</p>
                                <p className='my-3 codeBlock '><span
                                    className='text-[#D73A49] font-semibold'>function</span>{" App() {"}</p>
                                <pre>
                                    <code className=' codeBlock'>
                                        {'  '}<span className="text-[#D73A49] font-semibold ">return</span> ({'\n'}
                                        {'    <'}<span className='text-[#22863A]'>div</span>{'>\n'}
                                        {'      <'}<span className='text-[#22863A]'>Toaster</span> {'/> \n'}
                                        {'      <'}<span
                                        className='text-[#22863A]'>button</span> {'onClick={() => toast(\'My first toast\')}>'}{'\n'}
                                        {'          '}Give me a  Toast{"\n"}
                                        {'      </'}<span className='text-[#22863A]'>button</span>{'>\n'}
                                        {'    </'}<span className='text-[#22863A]'>div</span>{'>\n'}
                                        {'  '});{'\n'}
                                        {'}'}
                                    </code>
                                </pre>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;