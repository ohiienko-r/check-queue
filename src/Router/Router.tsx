import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "@/Contexts";
import { ROUTES_NAMES } from "./routes-names";
import { Root } from "@/Root";
import { getRotues } from "./routes";

const Router = () => {
  const user = useAuth();
  const router = createBrowserRouter([
    {
      path: ROUTES_NAMES.ROOT,
      element: <Root />,
      children: getRotues(user),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
