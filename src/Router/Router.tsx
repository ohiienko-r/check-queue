import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES_NAMES } from "./routes-names";
import { Root } from "@/Root";
import { Auth } from "@/Pages";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES_NAMES.ROOT,
      element: <Root />,
      children: [{ index: true, element: <Auth /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
