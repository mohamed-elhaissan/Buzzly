import { useEffect, useState } from "react";
import { ToastProps } from "./type";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast.tsx";
import { toast } from "./toast.ts";

export function Toaster() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = toast._subscribe((newToast) => {
      console.log(newToast);

      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3000);
    });

    return unsubscribe;
  }, []);

  return createPortal(
    <div >
      <AnimatePresence initial={false}>
        {" "}
        {toasts?.map((toast,index) => (
          <Toast key={toast.id} offset={index*20} type={toast.type}  message={toast.message} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
