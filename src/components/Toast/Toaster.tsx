import { useEffect, useState } from "react";
import { ToastProps } from "./type";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast.tsx";
import { toast } from "./toast.ts";

export  function Toaster() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);



  useEffect(
    () => {
      const unsubscribe = toast._subscribe((newToast) => {
        setToasts((prev) => [...prev, newToast]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== newToast.id))
          }, 3000)
      })

      return unsubscribe;
    },[])

  return createPortal(
   <div className="fixed top-4 right-4 z-[9999] space-y-3">
    <AnimatePresence> {
        toasts?.map((toast) =>(
            <Toast key={toast.id} message={`test${toast.id}`} />
        ))
    }</AnimatePresence>
       </div>,
    document.body
  );
}
