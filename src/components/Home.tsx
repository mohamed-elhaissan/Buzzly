import {useScroll, motion} from "framer-motion";
import Types from "./Types.tsx";
import Installation from "./Installation.tsx";
import Usage from "./Usage.tsx";
import Hero from "./Hero.tsx";
import Position from "./Position.tsx";
import Expand from "./Expand.tsx";
import Others from "./Others.tsx";
import Footer from "./Footer.tsx";
import {useEffect, useState} from "react";
import Loading from "./Loading.tsx";
import DarkMode from "./DarkMode.tsx";

const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {scrollYProgress} = useScroll();


    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", () => {
                setIsLoading(false);
            });
        }
        return () => window.removeEventListener("load", () => {
            setIsLoading(false);
        });
    }, []);


    return (
        <div className=' '>
            {isLoading ? (<Loading/>) : (
                <div className='flex items-center justify-start   flex-col   h-screen selection:bg-[#DBDBDB]'>
                    <DarkMode/>
                    <motion.div
                        id="scroll-indicator"
                        style={{
                            scaleX: scrollYProgress,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 10,
                            originX: 0,
                            backgroundColor: "#0C66F4",
                        }}
                    />
                    <div className='w-full flex flex-col items-center justify-center mt-52 gap-[56px] '>
                        <Hero/>
                        <Installation/>
                        <Usage/>
                        <Types/>
                        <Position/>
                        <Expand/>
                        <Others/>
                        <Footer/>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Home;