import { useEffect,  useState } from "react";
import { ToastProps } from "./type";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast.tsx";
import { toast } from "./toast.ts";
import { getPosition, getToastAnimation } from "./assets.tsx";

interface CustomProps {
  type?: ToastProps;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  richColor?: boolean | false;
}

export function Toaster({
  position = "bottom-right",
  richColor = false,
}: CustomProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const positionValue = getPosition(position);

  useEffect(() => {
    const unsubscribe = toast._subscribe((newToast) => {
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3000);
    });

    return unsubscribe;
  }, []);

  return createPortal(
    <div className={`fixed ${positionValue} w-1/5 flex flex-col gap-2 m-4`}>
      <AnimatePresence>
        {toasts?.map((toast) => (
          <div key={toast.id}>
            <Toast
              toastAnimation={getToastAnimation(position)}
              type={toast.type}
              richColor={richColor}
              message={toast.message}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
