import { useEffect, useState } from "react";
import { ToastProps } from "./type";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast.tsx";
import { toast } from "./toast.ts";

export function Toaster() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [toastPosition, setToastPosition] = useState<string>(
    "right-[2%] bottom-[2%]"
  );
  console.log(toastPosition );
  

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
    <div className={`fixed ${toastPosition}  flex flex-col gap-2`}>
      <AnimatePresence>
        {" "}
        {toasts?.map((toast, index) => (
          <div key={index}>
            <Toast type={toast.type} passPositionValue={setToastPosition} message={toast.message} />
          </div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
