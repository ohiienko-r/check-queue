import { FC } from "react";
import { SettingsMenuItemPropTypes } from "./types";
import classes from "./SettingsMenuItem.module.scss";

const SettingsMenuItem: FC<SettingsMenuItemPropTypes> = ({
  title,
  onPress,
  decline,
}) => {
  return (
    <li
      onClick={onPress}
      className={[classes.settingsItem, decline && classes.decline].join(" ")}
    >
      {title}
    </li>
  );
};

export default SettingsMenuItem;
