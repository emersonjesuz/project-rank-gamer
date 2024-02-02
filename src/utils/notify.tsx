import { toast } from "react-toastify";
const customId = "custom-id-yes";
export default function notify(
  message: string,
  type: "info" | "success" | "warning" | "error" | "default"
) {
  toast(message, {
    type: type,
    theme: "colored",
    position: "top-right",
    style: {
      width: "300px",
      height: "70px",
      fontSize: "14px",
    },
    autoClose: 1500,
    delay: 0,
    pauseOnHover: false,
    toastId: customId,
  });
}
