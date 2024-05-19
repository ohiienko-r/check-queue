import { MODAL_TYPE } from "./modal.dto";
import { ModalType } from "./types";
import classes from "./Modal.module.scss";

export const getBorderColor = (borderType: ModalType) => {
  switch (borderType) {
    case MODAL_TYPE.SUCCESS:
      return classes.successBorder;
    case MODAL_TYPE.WARNING:
      return classes.warningBorder;
    case MODAL_TYPE.ERROR:
      return classes.errorBorder;
    default:
      return classes.defaultBorder;
  }
};
