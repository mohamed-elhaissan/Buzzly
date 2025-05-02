import { useScroll, motion } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed bottom-10 left-10 ">
      <div className="flex items-center justify-center  gap-2">
        <span className="bg-[#C7B9B5]">
          <motion.span
            className={`inline-block h-[100px] w-[2px] rounded-full origin-top bg-[#ED1C5C]`}
            style={{
              scaleY: scrollYProgress,
            }}
          ></motion.span>
        </span>
        <p className="dark:text-white sm:opacity-0 md:opacity-100">Scroll</p>
      </div>
    </div>
  );
};

export default Scroll;
