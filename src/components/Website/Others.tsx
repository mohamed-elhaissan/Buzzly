import { useState } from "react";
import CopyButton from "./CopyButton.tsx";
import { motion } from "framer-motion";// FontAwesome

interface TypesSnippet {
  name: string;
  snippet: string;
  tag: string;
}

const Others = ({
  isRichColorActive
}:{
  isRichColorActive:(value : boolean) => void
}) => {
  const [isActivatedButton, setIsActivatedButton] = useState<TypesSnippet>(
    allTypes[0]
  );
  const [isCLickedButton, setIsCLickedButton] = useState<number>(0);

  return (
    <section className="w-1/3  sm:w-[80%] xl:w-1/2 2xl:w-1/3">
      <div>
        <h2 className="font-semibold text-white  mb-2">Others</h2>

        <p className="text-[#c1c1c6]">You can use more</p>

        <div className="mt-4   flex items-center gap-3  flex-wrap w-full">
          {allTypes.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setIsCLickedButton(index);
                  setIsActivatedButton(item);
                  if(item.tag === "normal") {
                    isRichColorActive(false)
                  }else {
                    isRichColorActive(true)
                  }
                }}
                style={{
                  background: isCLickedButton === index ? "#8CEECA" : "#1D1D1D",
                  color: isCLickedButton === index ? "black" : "#fff",
                }}
                className="codeText text-sm    hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer "
              >
                {item.name}
              </button>
            </div>
          ))}
          {
            <motion.div
              variants={itemVariants}
              initial="closed"
              animate="open"
              className="bg-[#171716] text-white border-[#2e2e2d] border mt-5 w-full  flex justify-between items-center py-4 px-5 rounded"
            >
              {isActivatedButton.snippet ? (
                <motion.span
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm"
                >
                  <span className="text-[#77dddd]">toast</span>
                  <span className="text-[#F07178]">

                .{isActivatedButton.tag}
                  </span>
                  <span className="text-[#C3E88D]">

                  {isActivatedButton.snippet}
                  </span>
                  <pre>
                    <code className="text-[#6f6f6f ] codeText">
                      {"\n"}
                      {`// ...\n`}
                      {"<"}
                      <span className="text-[#ffcc66]">Toaster </span>
                      <span className="text-[#77dddd]">richColors</span>
                      {" />"}
                    </code>
                  </pre>
                </motion.span>
              ) : (
                <motion.p
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm text-red-500"
                >
                  Oops! Something went wrong
                </motion.p>
              )}
              <CopyButton
                text={`toast${isActivatedButton.snippet}

// ...

<Toaster richColors  />`}
              />
            </motion.div>
          }
        </div>
      </div>
    </section>
  );
};
export default Others;

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
};

const allTypes = [
  {
    name: "Default",
    tag : "normal",
    snippet: `('Event has been created')`,
    
  },
  {
    name: "Success",
    tag : "success",
    snippet: `('Event has been created')`,
    
  },
  {
    name: "Info",
    tag : "info",
    snippet: `('Be at the area 10 minutes before the event time')`,
    
  },
  {
    name: "Warning",
    tag: "warning",
    snippet: `('Event start time cannot be earlier than 8am')`,
    
  },
  {
    name: "Error",
    tag: "error",
    snippet: `('Event has not been created')`,
    
  },
];