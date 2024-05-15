import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES_NAMES } from "./routes-names";
import { Root } from "@/Root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES_NAMES.ROOT,
      element: <Root />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
