export const injectStyles = () => {
    if (typeof document === 'undefined') {
        return;
    }
    const styleID = "buzzly-toast-inject-styles";
    if (document.getElementById(styleID)) {
        return;
    }
    const style = document.createElement('style');
    style.id = styleID
    style.textContent = `:root {
    /* success Toast */
    --success-background: oklch(72.3% 0.219 149.579/0.2);
    --success-border-color: oklch(72.3% 0.219 149.579/0.9);
    --success-text-color: oklch(72.3% 0.219 149.579);
    /* warning Toast */
    --warning-background: oklch(70.5% 0.213 47.604/0.2);
    --warning-border-color: oklch(70.5% 0.213 47.604/0.9);
    --warning-text-color: oklch(70.5% 0.213 47.604);
    /* error Toast */
    --error-background: oklch(63.7% 0.237 25.331/0.2);
    --error-border-color: oklch(63.7% 0.237 25.331/0.9);
    --error-text-color: oklch(63.7% 0.237 25.331);
    /* info Toast */
    --info-background: oklch(62.3% 0.214 259.815/0.2);
    --info-border-color: oklch(62.3% 0.214 259.815/0.9);
    --info-text-color: oklch(62.3% 0.214 259.815);
    /* default Toast */
    --background: white;
    --border-color: #BEC0C5;
    --text-color: #6b7280;
}

.toast-container {
    position: fixed;
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem;
}

.toast {
    width: 100%;
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    border-width: 1px;
    border-style: solid;
    align-items: center;
    justify-content: start;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.1);
}

.success-toast {
    background-color: var(--success-background);
    border-color: var(--success-border-color);
    color: var(--success-text-color);
}

.error-toast {
    background-color: var(--error-background);
    border-color: var(--error-border-color);
    color: var(--error-text-color);
}

.warning-toast {
    background-color: var(--warning-background);
    border-color: var(--warning-border-color);
    color: var(--warning-text-color);
}

.default-toast {
    background-color: var(--background);
    border-color: var(--border-color);
    color: var(--text-color);
}

.info-toast {
    background-color: var(--info-background);
    border-color: var(--info-border-color);
    color: var(--info-text-color);
}


`
    document.head.appendChild(style)
}
if (typeof window !== 'undefined') {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', injectStyles);

    } else {
        injectStyles()
    }
}
