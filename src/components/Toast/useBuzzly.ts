import {useCallback, useState} from "react";


type toastType = 'default' | 'info' | 'success' | 'warning'
type toastPosition = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right'


interface Toast {
    message: string,
    type: toastType,
    position: toastPosition
}

export function useBuzzly() {
    const [toast, setToast] = useState<Toast | null>(null);


    const showToast = useCallback((message: string, type: toastType, position: toastPosition) => {

        setToast({message, type, position});
        setTimeout(() => {
            setToast(null)
        }, 3000)


    }, [])
    const success = (message: string, position: toastPosition) => showToast(message, "success", position);
    const info = (message: string, position: toastPosition) => showToast(message, "info", position);
    const warning = (message: string, position: toastPosition) => showToast(message, "warning", position);
    const basic = (message: string, position: toastPosition) => showToast(message, "default", position);
    return {toast, success, info, warning, basic};
}