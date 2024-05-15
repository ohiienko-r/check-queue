import { BUTTON_STYLE } from "./button.dto";
import classes from "./Button.module.scss";

export const getStyles = (
  style: (typeof BUTTON_STYLE)[keyof typeof BUTTON_STYLE]
) => {
  switch (style) {
    case BUTTON_STYLE.SUBMIT:
      return classes.submit;
    case BUTTON_STYLE.DISMISS:
      return classes.dismiss;
    default:
      return classes.submit;
  }
};
