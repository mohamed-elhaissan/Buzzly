import {Link} from "react-router-dom";
import Types from "./Types.tsx";
import CopyButton    from "./CopyButton.tsx";
const Home = () => {

    // this function for copy button !



    // this section for style the code block


    return (
        <div className='flex items-center justify-start  flex-col   h-screen selection:bg-[#DBDBDB]'>
            <div className='w-full flex flex-col items-center justify-center mt-52 '>
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
                <section className='w-1/3 mt-10 '>
                    <div>
                        <h2 className='font-semibold text-black mb-2'>Installation</h2>
                        <div
                            className='bg-[#FCFCFC] border border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded'>
                            <p className='codeBlock text-sm'><span className='text-[#6F42C1]'>npm</span> install Buzzly
                            </p>
                            <CopyButton text='npm install Buzzly'/>
                        </div>
                    </div>
                </section>
                <section className='w-1/3 mt-20'>
                    <div>
                        <h2 className='font-semibold  mb-2'>Usage</h2>

                        <p>Render the toaster in the root of your app.</p>

                        <div
                            className='bg-[#FCFCFC] border  border-[#e4e4e7] flex justify-between items-center p-2 px-5 rounded'>
                            <div className='text-sm'>
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
                <section className='w-1/3 mt-20'>
                    <div>
                        <h2 className='font-semibold  mb-2'>Types</h2>

                        <p>You can customize the type of toast you want to render, and pass an options object as the second argument.</p>

                       <Types/>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;