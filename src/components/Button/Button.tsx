import { FC } from "react";
import { ButtonProps } from "./types";
import { getStyles } from "./helpers";
import classes from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  style = "submit",
  innerText,
  onPress,
  disabled = false,
}) => {
  return (
    <button
      onClick={onPress}
      disabled={disabled}
      className={[classes.button, getStyles(style)].join(" ")}
    >
      {innerText}
    </button>
  );
};

export default Button;
