





export default function Usage() {
    return (
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
    )
}