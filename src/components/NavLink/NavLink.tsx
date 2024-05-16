import { FC } from "react";
import { Link } from "react-router-dom";
import { NavLinkPropTypes } from "./types";
import classes from "./NavLink.module.scss";

const NavLink: FC<NavLinkPropTypes> = ({ title, routName }) => {
  return (
    <Link to={routName} className={classes.navLink}>
      {title}
    </Link>
  );
};

export default NavLink;
