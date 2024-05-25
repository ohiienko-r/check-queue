import { FC } from "react";
import { ButtonProps } from "./types";
import { getTypeStyles } from "./helpers";
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
      className={[classes.button, getTypeStyles(style)].join(" ")}
    >
      {innerText}
    </button>
  );
};

export default Button;
