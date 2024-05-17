import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkPropTypes } from "./types";
import classes from "./NavLink.module.scss";

const NavigationLink: FC<NavLinkPropTypes> = ({ title, routName }) => {
  return (
    <NavLink
      to={routName}
      className={({ isActive }) =>
        isActive ? [classes.navLink, classes.active].join(" ") : classes.navLink
      }
    >
      {title}
    </NavLink>
  );
};

export default NavigationLink;
