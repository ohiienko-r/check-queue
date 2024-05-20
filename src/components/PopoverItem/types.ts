import { POPOVER_ITEM_STYLE } from "./PopoverItem.dto";

export type PopoverItemStyle =
  (typeof POPOVER_ITEM_STYLE)[keyof typeof POPOVER_ITEM_STYLE];

export type PopoverItemPropTypes = {
  style?: PopoverItemStyle;
  text: string;
  onPress: () => void;
};
