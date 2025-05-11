import { ToastTypes } from "./type.ts";

const getType = (iconType: ToastTypes) => {
  switch (iconType) {
    case "success":
      return successIcon;
    case "warning":
      return warningIcon;
    case "error":
      return errorIcon;
    case "info":
      return infoIcon;
    default:
      return null;
  }
};
const getBackgroundColor = ({
  type,
  richColor,
}: {
  type: string;
  richColor: boolean;
}) => {
  if (richColor) {
    switch (type) {
      case "success":
        return "bg-green-100 border text-green-500 border-green-100";
      case "warning":
        return "bg-white border text-yellow-500 border-yellow-100";
      case "error":
        return "bg-red-100 border text-red-500 border-red-100";
      case "info":
        return "bg-blue-100 border text-blue-500 border-blue-100";
      default:
        return "bg-gray-500";
    }
  }
  return "bg-white";
};

const getPosition = (position: string) => {
  switch (position) {
    case "top-left":
      return "top-0 left-0";
    case "top-right":
      return "top-0 right-0";
    case "bottom-left":
      return "bottom-0 left-0";
    case "bottom-right":
      return "bottom-0 right-0";
    case "top-center":
      return "top-0 left-1/2 transform -translate-x-1/2";
    case "bottom-center":
      return "bottom-0 left-1/2 transform -translate-x-1/2";
    default:
      return "bottom-0 right-0";
  }
};

const getToastAnimation = (toastPosition:string)=>{
  switch (toastPosition) {
    case "bottom-left" :
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      }
    case "bottom-right" :
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      }   
    case "top-left" :
      return {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      }
    case "top-right" :
      return {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      }
    case "top-center" :
      return {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      }
    case "bottom-center" :
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      }
    default:
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      }
  }
}
const successIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    height="20"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const warningIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    height="20"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    height="20"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
      clipRule="evenodd"
    />
  </svg>
);
const errorIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    height="20"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
);

const framerToastVaraints = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  opened: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
};

export const itemsVariants = framerToastVaraints;
export { getType };
export { getBackgroundColor };
export { getPosition };
export {getToastAnimation}