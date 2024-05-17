import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "@/Contexts";
import { ROUTES_NAMES } from "./routes-names";
import { Root } from "@/Root";
import Loading from "@/Root/Loading/Loading";
import { getRoutes } from "./routes";

const Router = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const router = createBrowserRouter([
    {
      path: ROUTES_NAMES.ROOT,
      element: <Root />,
      children: getRoutes(user),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
