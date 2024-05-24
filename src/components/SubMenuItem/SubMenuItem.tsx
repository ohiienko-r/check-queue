import { FC } from "react";
import { SubMenuItemPropTypes } from "./types";
import classes from "./SubMenuItem.module.scss";

const SubMenuItem: FC<SubMenuItemPropTypes> = ({ iconURL, title, onPress }) => {
  return (
    <li onClick={onPress} className={classes.subItem}>
      {iconURL && (
        <img
          src={iconURL}
          alt="Sub menu item icon"
          className={classes.subItemIcon}
        />
      )}
      <p>{title}</p>
    </li>
  );
};

export default SubMenuItem;
