import { motion } from "framer-motion";
import { ToastProps } from "./type";
import { getBackgroundColor,  getType } from "./assets";


export default function Toast({
  type,
  message,
  richColor = false,
  position = "bottom-right",
  toastAnimation,
}: ToastProps ) {
  const icon = getType(type);
  const toatBackgroundColor = getBackgroundColor({ type, richColor });
  console.log(position);
  
  return (
    <motion.div
    layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{
        duration: 0.45,
        type: "spring",
        bounce: 0.4,
        staggerChildren: 0.1,
      }}
      className={`w-full  p-4 flex gap-3 items-center justify-start toast text-sm rounded-md ${toatBackgroundColor} shadow-md`}
    >
      {icon}
      <span>{message}</span>
    </motion.div>
  );
}
