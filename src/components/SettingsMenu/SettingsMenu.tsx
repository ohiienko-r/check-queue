import { FC, PropsWithChildren } from "react";
import classes from "./SettingsMenu.module.scss";

const SettingsMenu: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={classes.settingsMenu}>{children}</ul>;
};

export default SettingsMenu;
