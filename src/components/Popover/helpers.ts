import { Position } from "./types";
import classes from "./Popover.module.scss";
import { POPOVER_POSITION } from "./Popover.dto";

export const getPositioningClass = (position: Position) => {
  switch (position) {
    case POPOVER_POSITION.TOP:
      return classes.top;
    case POPOVER_POSITION.RIGHT:
      return classes.right;
    case POPOVER_POSITION.BOTTOM:
      return classes.bottom;
    case POPOVER_POSITION.LEFT:
      return classes.left;
    default:
      return classes.top;
  }
};
