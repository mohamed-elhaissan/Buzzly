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
  success(message: string) {
    this.emit({ type: "success", message  });
  }
  error(message: string) {
    this.emit({ type: "error", message  });
  }
  warning(message: string) {
    this.emit({ type: "warning", message  });
  }
  info(message: string) {
    this.emit({ type: "info", message  });
  }

  _subscribe(listener: ToastListener) {
    this.listnner.add(listener);
    return () => {
      this.listnner.delete(listener);
    };
  }
}


export const toast = new ToastManager();