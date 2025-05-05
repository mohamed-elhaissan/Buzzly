import { motion } from "framer-motion";
import { ToastProps } from "./type";
import {getBackgroundColor, getType} from "./assets";

export default function Toast({ type, message,richColor = false,position = "bottom-right",offset }: ToastProps) {
  const icon = getType(type);
  const toatBackgroundColor = getBackgroundColor({ type, richColor });
  console.log(position);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      
      className={`fixed right-0  w-1/5 m-4 p-3 flex gap-3 items-center justify-start toast text-sm rounded-md ${toatBackgroundColor} shadow-md`}
      style={{
        bottom : offset
      }}
    >
      {icon}
      <span>{message}</span>
    </motion.div>
  );
}
