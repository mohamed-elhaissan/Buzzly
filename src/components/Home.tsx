
import Types from "./Types.tsx";
import Installation from "./Installation.tsx";
import Usage from "./Usage.tsx";
import Hero from "./Hero.tsx";
import Position from "./Position.tsx";

const Home = () => {

    // this function for copy button !


    // this section for style the code block


    return (
        <div className='flex items-center justify-start  flex-col   h-screen selection:bg-[#DBDBDB]'>
            <div className='w-full flex flex-col items-center justify-center mt-52 '>
                <Hero/>
                <Installation/>
                <Usage/>
                <Types/>
                <Position/>
            </div>
        </div>
    )
}
export default Home;