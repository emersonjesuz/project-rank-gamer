import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContainerContext from "../layout";
import Config from "../pages/config";
import Rank from "../pages/rank";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ContainerContext />}>
      <Route element={<Rank />} path="/" />
      <Route element={<Config />} path="/config" />
    </Route>
  )
);
