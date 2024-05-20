import { FC, PropsWithChildren } from "react";
import classes from "./SubMenu.module.scss";

const SubMenu: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={classes.subMenu}>{children}</ul>;
};

export default SubMenu;
