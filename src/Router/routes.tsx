import { Auth, PcbPage, RfqPage } from "@/Pages";
import { ROUTES_NAMES } from "./routes-names";
import { User } from "firebase/auth";

export const getRotues = (user: User | null) => {
  if (!user) {
    return [{ index: true, element: <Auth /> }];
  } else
    return [
      { index: true, element: <RfqPage /> },
      { path: ROUTES_NAMES.PCB, element: <PcbPage /> },
    ];
};
