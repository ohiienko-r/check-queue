import { Auth, PcbPage, RfqPage } from "@/Pages";
import { ROUTES_NAMES } from "./routes-names";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const getRoutes = (user: User | null) => {
  if (!user) {
    return [
      { index: true, element: <Navigate to={ROUTES_NAMES.AUTH} replace /> },
      { path: ROUTES_NAMES.AUTH, element: <Auth /> },
    ];
  } else {
    return [
      { index: true, element: <Navigate to={ROUTES_NAMES.RFQ} replace /> },
      { path: ROUTES_NAMES.RFQ, element: <RfqPage /> },
      { path: ROUTES_NAMES.PCB, element: <PcbPage /> },
    ];
  }
};
