import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "@/Contexts";
import { ROUTES_NAMES } from "./routes-names";
import { Root } from "@/Root";
import { getRoutes } from "./routes";
import Loading from "@/Root/Loading/Loading";

const Router = () => {
  const { user, loading } = useAuth();

  //TODO: dix this quick and dirty solution
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

  console.log(getRoutes(user));
  return <RouterProvider router={router} />;
};

export default Router;
