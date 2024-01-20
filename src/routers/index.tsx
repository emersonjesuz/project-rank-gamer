import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Rank from "../pages/rank";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rank />} path="/" />
    </Route>
  )
);
