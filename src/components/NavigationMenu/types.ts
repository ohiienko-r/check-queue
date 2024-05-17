import { NavLinkPropTypes } from "../NavigationLink/types";

interface NavMenuSinglePropType extends NavLinkPropTypes {
  id: number;
}

export type NavMenuPropTypes = {
  config: Array<NavMenuSinglePropType>;
};
