import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <section className='bg-[#83e6f7] h-[40vh] footerGradient  codeText font-bold w-full ] shadow-sm flex items-end justify-center'>
            <h2 className='mb-4'>by <Link to={"https://linktr.ee/mohamed_elhaissan"} target={"_blank"} className='text-blue-500 hover:underline'>Mohamed Elhaissan</Link></h2>
        </section>
    )
}