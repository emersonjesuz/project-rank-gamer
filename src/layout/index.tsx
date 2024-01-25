import { Outlet } from "react-router-dom";
import { GlobalContextProvider } from "../context/dataSquardContext";

export default function ContainerContext() {
  return (
    <GlobalContextProvider>
      <Outlet />
    </GlobalContextProvider>
  );
}
