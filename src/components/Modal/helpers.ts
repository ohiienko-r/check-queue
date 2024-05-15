import { BORDER_TYPE } from "./modal.dto";
import classes from "./Modal.module.scss";

export const getBorderColor = (
  borderType: (typeof BORDER_TYPE)[keyof typeof BORDER_TYPE]
) => {
  switch (borderType) {
    case BORDER_TYPE.SUCCESS:
      return classes.successBorder;
    case BORDER_TYPE.WARNING:
      return classes.warningBorder;
    case BORDER_TYPE.ERROR:
      return classes.errorBorder;
    default:
      return classes.defaultBorder;
  }
};
