import { FC } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import { NavMenuPropTypes } from "./types";
import classes from "./NavigationMenu.module.scss";

const NavigationMenu: FC<NavMenuPropTypes> = ({ config }) => {
  return (
    <ul className={classes.navMenu}>
      {config.map((item) => (
        <NavigationLink
          key={item.id}
          title={item.title}
          routeName={item.routeName}
        />
      ))}
    </ul>
  );
};

export default NavigationMenu;
