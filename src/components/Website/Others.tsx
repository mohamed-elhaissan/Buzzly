import { useState } from "react";
import CopyButton from "./CopyButton.tsx";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa"; // FontAwesome

interface TypesSnippet {
  name: string;
  snippet: string;
}

const Others = () => {
  const [isActivatedButton, setIsActivatedButton] = useState<TypesSnippet>(
    allTypes[0]
  );
  const [isCLickedButton, setIsCLickedButton] = useState<number>(0);

  return (
    <section className="w-1/3  sm:w-[80%] xl:w-1/2 2xl:w-1/3">
      <div>
        <h2 className="font-semibold dark:text-white  mb-2">Others</h2>

        <p className="dark:text-[#c1c1c6]">You can use more</p>

        <div className="mt-4   flex items-center gap-3  flex-wrap w-full">
          {allTypes.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setIsCLickedButton(index);
                  setIsActivatedButton(item);
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
              className="bg-[var(--codeBackground)] dark:bg-[#171716] dark:text-white dark:border-[#2e2e2d] border mt-5 w-full border-[#e4e4e7] flex justify-between items-center py-4 px-5 rounded"
            >
              {isActivatedButton.snippet ? (
                <motion.span
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="codeBlock text-sm"
                >
                  <span className="text-[#D73A49]">toast</span>
                  {isActivatedButton.snippet}
                  <pre>
                    <code className="text-[#6f6f6f ] codeText">
                      {"\n"}
                      {`// ...\n`}
                      {"<"}
                      <span className="text-black dark:text-white">
                        Toaster
                      </span>
                      {" richColors  />"}
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
    name: "Rich Colors Success",
    snippet: `.success('Event has been created')`,
    fill: `#ECFDF3`,
    pic: <BiCheck />,
  },
  {
    name: "Rich Colors Error",
    snippet: `.error('Event has not been created')`,
    fill: `#FFF0F0`,
    pic: <FaExclamationTriangle />,
  },
  {
    name: "Rich Colors Info",
    snippet: `.info('Be at the area 10 minutes before the event time')`,
    fill: `#F0F8FF`,
    pic: <FaInfoCircle />,
  },
  {
    name: "Rich Colors Warning",
    snippet: `.warning('Event start time cannot be earlier than 8am')`,
    fill: `#FFFCF0`,
  },
];
