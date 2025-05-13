import { motion, TargetAndTransition } from "framer-motion";
import { ToastProps } from "./type";
import { getBackgroundColor, getType } from "./assets";

export default function Toast({
  type,
  message,
  richColor = false,
  initial,
  animate,
  exit,
}: ToastProps & {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  exit: TargetAndTransition;
}) {
  const icon = getType(type);
  const toatBackgroundColor = getBackgroundColor({ type, richColor });

  return (
    <motion.div
      layout
      initial={initial}
      animate={animate}
      exit={exit}
      className={`w-full  p-4 flex gap-3 items-center justify-start toast text-sm rounded-md ${toatBackgroundColor} shadow-md `}
    >
      {icon}
      <span>{message}</span>
    </motion.div>
  );
}
