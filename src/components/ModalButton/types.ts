import { BUTTON_TYPE } from "./ModalButton.dto";

export type ModalButtonStyleType =
  (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export type ModalButtonPropTypes = {
  type: ModalButtonStyleType;
  onPress: () => void;
};
