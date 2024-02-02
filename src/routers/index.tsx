import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import ContainerContext from "../layout";
import Config from "../pages/config";
import Rank from "../pages/rank";

function ProtectRouterPermission({ redirect }: { redirect: string }) {
  const isAltentic = localStorage.getItem("i");
  return isAltentic ? <Outlet /> : <Navigate to={redirect} />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ContainerContext />}>
      <Route element={<Rank />} path="/" />
      <Route element={<ProtectRouterPermission redirect="/" />}>
        <Route element={<Config />} path="/config" />
      </Route>
    </Route>
  )
);
