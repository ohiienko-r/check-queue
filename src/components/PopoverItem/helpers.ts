import { POPOVER_ITEM_STYLE } from "./PopoverItem.dto";
import { PopoverItemStyle } from "./types";
import classes from "./PopoverItem.module.scss";

export const getPopoverItemStyle = (style: PopoverItemStyle) => {
  switch (style) {
    case POPOVER_ITEM_STYLE.DEFAULT:
      return classes.default;
    case POPOVER_ITEM_STYLE.DECLINE:
      return classes.decline;
    default:
      return classes.default;
  }
};
