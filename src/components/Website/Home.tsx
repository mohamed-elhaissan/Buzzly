import Types from "./Types.tsx";
import Installation from "./Installation.tsx";
import Usage from "./Usage.tsx";
import Hero from "./Hero.tsx";
import Position from "./Position.tsx";
import Expand from "./Expand.tsx";
import Others from "./Others.tsx";
import Footer from "./Footer.tsx";
import { useEffect, useState } from "react";
import Loading from "./Loading.tsx";
import DarkMode from "./DarkMode.tsx";
import Scroll from "./Scroll.tsx";

import { toast, Toaster } from "../Toast/index.ts";

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










          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
            onClick={() => toast.success("test here")}
          >
            {" "}
            success
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
            onClick={() => toast.normal("test here")}
          >
            {" "}
            normal
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
            onClick={() => toast.warning("test here")}
          >
            {" "}
            warning
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
            onClick={() => toast.info("test here")}
          >
            {" "}
            info
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
            onClick={() => toast.error("test here")}
          >
            {" "}
            eror
          </button>











          <DarkMode />
          <Toaster />
          <div className="w-full flex flex-col items-center justify-center mt-52 gap-[56px] ">
            <Hero />
            <Installation />
            <Usage />
            <Types />
            <Position />
            <Expand />
            <Others />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
