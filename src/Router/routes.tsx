import { Auth, Pcb, Rfq } from "@/Pages";
import { ROUTES_NAMES } from "./routes-names";
import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const getRoutes = (user: User | null) => {
  if (!user) {
    return [{ index: true, element: <Auth /> }];
  } else {
    return [
      { index: true, element: <Navigate to={ROUTES_NAMES.RFQ} replace /> },
      { path: ROUTES_NAMES.RFQ, element: <Rfq /> },
      { path: ROUTES_NAMES.PCB, element: <Pcb /> },
    ];
  }
};
