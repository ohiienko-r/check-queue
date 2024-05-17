import { FC } from "react";
import SubMenuItem from "../SubMenuItem/SubMenuItem";
import { SubMenuPropTypes } from "./types";
import classes from "./SubMenu.module.scss";

const SubMenu: FC<SubMenuPropTypes> = ({ config }) => {
  return (
    <ul className={classes.subMenu}>
      {config.map((item) => (
        <SubMenuItem
          key={item.id}
          iconURL={item.iconURL}
          title={item.title}
          onPress={item.onPress}
        />
      ))}
    </ul>
  );
};

export default SubMenu;
