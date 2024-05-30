import { ROUTES_NAMES } from "@/Router/routes-names";
import { navigationMenu } from "../Sidebar/helpers";

export const mobileNavMenu = [
  ...navigationMenu,
  { id: 2, title: "Settings", routeName: ROUTES_NAMES.SETTINGS },
];
