import { ToastProps } from "./type";

type ToastListener = (toast: ToastProps) => void;

class ToastManager {
  private listnner = new Set<ToastListener>();

  //function to add a listener
  private emit(toast: ToastProps) {
    //generate a random id for the toast
    const id = crypto.randomUUID();
    this.listnner.forEach((listener) => {
      listener({ ...toast, id });
    });
  }

  //methodes
  success(message: string, duration = 3000) {
    this.emit({ type: "success", message, duration });
  }
  error(message: string, duration = 3000) {
    this.emit({ type: "error", message, duration });
  }
  warning(message: string, duration = 3000) {
    this.emit({ type: "warning", message, duration });
  }
  info(message: string, duration = 3000) {
    this.emit({ type: "info", message, duration });
  }

  _subscribe(listener: ToastListener) {
    this.listnner.add(listener);
    return () => {
      this.listnner.delete(listener);
    };
  }
}


export const toast = new ToastManager();