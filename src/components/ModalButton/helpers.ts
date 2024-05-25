import { BUTTON_TYPE } from "./ModalButton.dto";
import { ModalButtonStyleType } from "./types";
import classes from "./ModalButton.module.scss";

export const getTypeStyleAndText = (type: ModalButtonStyleType) => {
  switch (type) {
    case BUTTON_TYPE.SUBMIT:
      return { class: classes.submit, text: "Submit" };
    case BUTTON_TYPE.DECLINE:
      return { class: classes.decline, text: "Close" };
    default:
      return { class: classes.submit, text: "Submit" };
  }
};
