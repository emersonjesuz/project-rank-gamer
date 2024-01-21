import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Rank from "../pages/rank";
import Config from "../pages/config";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rank />} path="/" />
      <Route element={<Config />} path="/config" />
    </Route>
  )
);
