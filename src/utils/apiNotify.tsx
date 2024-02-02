import axios from "axios";
import notify from "./notify";

export default function NotifyError(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (error.message === "Network Error") {
      return notify("oops estamos com problemas no momento", "error");
    }
    if (!error.response?.data.message) return;
    const ErrorMessage = error.response.data.message;

    const statusCode = error.response.status;

    if (statusCode === 401) {
      notify("sessão expirou!", "error");
      localStorage.clear();

      return statusCode;
    }

    if (statusCode === 500) {
      notify("oops estamos com problemas no momento!", "error");
      return statusCode;
    }
    notify(ErrorMessage, "error");
    return statusCode;
  }
  return notify("oops estamos com problemas no momento", "error");
}
