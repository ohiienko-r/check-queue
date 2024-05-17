import { ROUTES_NAMES } from "@/Router/routes-names";
import settingsIcon from "@/assets/images/settings.svg";
import helpIcon from "@/assets/images/help.svg";

export const navigationMenu = [
  { id: 0, title: "RFQ", routeName: ROUTES_NAMES.RFQ },
  { id: 1, title: "PCB", routeName: ROUTES_NAMES.PCB },
];

export const subMenu = [
  {
    id: 0,
    iconUrl: settingsIcon,
    title: "Settings",
    onPress: () => console.log("Settings"),
  },
  {
    id: 1,
    iconUrl: helpIcon,
    title: "help",
    onPress: () => console.log("Help"),
  },
];
