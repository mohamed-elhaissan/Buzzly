import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <section className='bg-[#FCFCFC] codeText font-bold w-full h-[10vh] shadow-sm flex items-center justify-center'>
            <h2>by <Link to={"https://linktr.ee/mohamed_elhaissan"} target={"_blank"} className='text-blue-500'>Mohamed Elhaissan</Link></h2>
        </section>
    )
}