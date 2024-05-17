import { FC } from "react";
import { Link } from "react-router-dom";
import { NavLinkPropTypes } from "./types";
import classes from "./NavLink.module.scss";

const NavLink: FC<NavLinkPropTypes> = ({
  id,
  title,
  routName,
  isActive,
  onPress,
}) => {
  const handlePress = () => {
    onPress(id);
  };
  return (
    <Link
      to={routName}
      className={[classes.navLink, isActive && classes.active].join(" ")}
      onClick={handlePress}
    >
      {title}
    </Link>
  );
};

export default NavLink;
