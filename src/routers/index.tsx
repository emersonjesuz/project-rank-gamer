import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Rank from "../pages/rank";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rank />} path="/" />
    </Route>
  )
);
