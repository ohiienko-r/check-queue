import { FC } from "react";
import { getPopoverItemStyle } from "./helpers";
import { PopoverItemPropTypes } from "./types";
import classes from "./PopoverItem.module.scss";

const PopoverItem: FC<PopoverItemPropTypes> = ({
  style = "default",
  text,
  onPress,
}) => {
  return (
    <li
      onClick={onPress}
      className={[classes.popoverItem, getPopoverItemStyle(style)].join(" ")}
    >
      {text}
    </li>
  );
};

export default PopoverItem;
