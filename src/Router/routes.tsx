import { Auth, Queue, Settings } from "@/Pages";
import { ROUTES_NAMES } from "./routes-names";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { COLLECTION_NAME } from "@/types";

export const getRoutes = (user: User | null) => {
  if (!user) {
    return [{ index: true, element: <Auth /> }];
  } else {
    return [
      { index: true, element: <Navigate to={ROUTES_NAMES.RFQ} replace /> },
      {
        path: ROUTES_NAMES.RFQ,
        element: <Queue collectionName={COLLECTION_NAME.RFQ} />,
      },
      {
        path: ROUTES_NAMES.PCB,
        element: <Queue collectionName={COLLECTION_NAME.PCB} />,
      },
      {
        path: ROUTES_NAMES.SETTINGS,
        element: <Settings />,
      },
    ];
  }
};
