import CopyButton from "./CopyButton.tsx";

export default function Installation() {
    return (
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
    )
}