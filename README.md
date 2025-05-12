# 🚀 **buzzly** – A Lightweight Toast Notification Library for React

**Buzzly** is a flexible, lightweight toast notification library for React, designed with **Framer Motion**, **Tailwind CSS**, and **TypeScript**. It allows you to add stylish, customizable notifications to your React apps with ease.

With built-in support for multiple types (e.g., `success`, `error`, `warning`, `info`, `normal`), vibrant colors, smooth animations, and custom positioning, Buzzly enhances user experience by delivering visually appealing notifications.

![MIT License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-18+-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-✔️-blue)

---

## ✨ **Features**

* 🔔 **Smooth Animations**: Toast notifications with entrance and exit animations powered by **Framer Motion**.
* 🎨 **Rich Color Support**: Customize the color for each toast type (`success`, `error`, `warning`, `info`, `normal`).
* 🪄 **Animated Stacking**: Multiple toasts can stack with smooth animations.
* 📱 **Responsive**: Works seamlessly on all screen sizes with full responsiveness.
* ⚡ **Built with the Best**: Developed with **Framer Motion**, **Tailwind CSS**, and **TypeScript** for better performance and ease of use.

---

## 📦 **Installation**

Install **Buzzly** via npm or yarn:

```bash
npm install buzzly


---

## 🛠 **Usage**

1. Import `Buzzly` into your component:

```tsx
import { useBuzzly } from 'buzzly-toast';
```

2. Trigger a toast notification with different types:

```tsx
const { toast } = useBuzzly();

toast.success("This is a success message!");
toast.error("Oops! Something went wrong.");
toast.warning("This is a warning!");
toast.info("Some informational text.");
toast.normal("Just a regular notification.");
```

3. Customize the appearance (position, duration, etc.):

```tsx
toast.success("Success with custom options!", {
  position: "top-right",  // Options: top-left, top-right, bottom-left, bottom-right
  duration: 4000,         // Time in milliseconds
});
```

---

## 💡 **Customization Options**

You can customize the following parameters for each toast:

* `type`: Type of the toast (`success`, `error`, `warning`, `info`, `normal`).
* `position`: Position of the toast (`top-left`, `top-right`, `bottom-left`, `bottom-right`).
* `duration`: Duration for which the toast stays visible (in milliseconds).
* `customStyles`: Customize the appearance (background color, text color, etc.) through Tailwind utility classes.

---

## 📝 **License**

Buzzly is open-source and available under the **MIT License**. Feel free to contribute or use it in your projects!

---

## 👥 **Contributing**

Buzzly is open to contributions! If you find a bug, have a feature request, or want to improve the library, feel free to open an issue or submit a pull request. Contributions are always welcome!

---

## 🔗 **Links**

* [GitHub Repository](https://github.com/yourusername/buzzly)
* [NPM Package](https://www.npmjs.com/package/buzzly)

---

### **That's it!**

With **Buzzly**, you can enhance the user experience in your React apps by providing beautiful and customizable toast notifications. Happy coding! 🚀
