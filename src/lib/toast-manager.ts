import { ToastProps } from "./type";

export type ToastListener = (toast: ToastProps) => void;

export class ToastManager {
  private listnner = new Set<ToastListener>();

  private emit(toast: ToastProps) {
    //generate a random id for the toast
    const id = crypto.randomUUID();
    this.listnner.forEach((listener) => {
      listener({ ...toast, id });
    });
  }

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
  normal(message: string) {
    this.emit({ type: "normal", message  });
  }

  _subscribe(listener: ToastListener) {
    this.listnner.add(listener);
    return () => {
      this.listnner.delete(listener);
    };
  }
}


export const toast = new ToastManager();