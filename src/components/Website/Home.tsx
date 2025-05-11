import Types from "./Types.tsx";
import Installation from "./Installation.tsx";
import Usage from "./Usage.tsx";
import Hero from "./Hero.tsx";
import Position from "./Position.tsx";
import Others from "./Others.tsx";
import Footer from "./Footer.tsx";
import { useEffect, useState } from "react";
import Loading from "./Loading.tsx";
import DarkMode from "./DarkMode.tsx";
import Scroll from "./Scroll.tsx";
import { Toaster,toast } from "../Toast/index.ts";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", () => {
        setIsLoading(false);
      });
    }
    return () =>
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className=" ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-start   flex-col   h-screen selection:bg-[#DBDBDB]">
          <Scroll />
        <button onClick={()=>{
          toast.success("This is a success message")
        }}>test</button>
          <DarkMode />
          <Toaster richColor  position="top-right"/>
          <div className="w-full flex flex-col items-center justify-center mt-52 gap-[56px] ">
            <Hero />
            <Installation />
            <Usage />
            <Types />
            <Position />
            
            <Others />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
