import { motion } from "framer-motion";
import { ToastProps } from "./type";
import getType from "./assets";
export default function Toast({ type, message }: ToastProps) {
  const icon = getType(type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}
      className="w-full m-4 p-3 flex gap-3 items-center justify-start  text-sm rounded-lg bg-white"
    >
      {icon}
      <span>{message}</span>
    </motion.div>
  );
}
