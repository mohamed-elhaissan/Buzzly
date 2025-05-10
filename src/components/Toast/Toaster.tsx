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
        console.log(toasts);
      }, 3000);
    });

    return unsubscribe;
  }, [toasts]);

  return createPortal(
    <div className={`fixed right-[2%] bottom-[2%] w-1/5 flex flex-col gap-2`}>
      <AnimatePresence>
        {" "}
        {toasts?.map((toast, index) => (
          <div key={index}>
            <Toast type={toast.type} richColor message={toast.message} />
          </div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
