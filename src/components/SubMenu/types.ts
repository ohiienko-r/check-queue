import { SubMenuItemPropTypes } from "../SubMenuItem/types";

interface SubMenuSinglePropType extends SubMenuItemPropTypes {
  id: number;
}

export type SubMenuPropTypes = {
  config: Array<SubMenuSinglePropType>;
};
