// toast/ToastManager.ts
type ToastType = 'success' | 'error' | 'info';
type Toast = { id: number; type: ToastType; message: React.ReactNode };
type CustomToast = { id: number; jsx: React.ReactElement };

type AnyToast = Toast | CustomToast;

let idCounter = 0;

class ToastManager {
    private toasts: AnyToast[] = [];
    private subscribers: ((toasts: AnyToast[]) => void)[] = [];

    subscribe(callback: (toasts: AnyToast[]) => void) {
        this.subscribers.push(callback);
        callback(this.toasts); // send initial toasts

        return () => {
            this.subscribers = this.subscribers.filter((sub) => sub !== callback);
        };
    }

    private notify() {
        for (const sub of this.subscribers) {
            sub(this.toasts);
        }
    }

    private addToast(toast: AnyToast) {
        this.toasts.push(toast);
        this.notify();
    }

    success(message: React.ReactNode) {
        this.addToast({ id: idCounter++, type: 'success', message });
    }

    error(message: React.ReactNode) {
        this.addToast({ id: idCounter++, type: 'error', message });
    }

    info(message: React.ReactNode) {
        this.addToast({ id: idCounter++, type: 'info', message });
    }

    custom(jsx: React.ReactElement) {
        this.addToast({ id: idCounter++, jsx });
    }

    remove(id: number) {
        this.toasts = this.toasts.filter((t) => t.id !== id);
        this.notify();
    }
}

export const toast = new ToastManager();
