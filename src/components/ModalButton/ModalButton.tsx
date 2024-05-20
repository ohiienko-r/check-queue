import { FC } from "react";
import { getButtonStyleAndText } from "./helpers";
import { ModalButtonPropTypes } from "./types";
import classes from "./ModalButton.module.scss";

const ModalButton: FC<ModalButtonPropTypes> = ({ type, onPress }) => {
  const buttonProps = getButtonStyleAndText(type);
  return (
    <button
      className={[classes.modalButton, buttonProps.class].join(" ")}
      onClick={onPress}
    >
      {buttonProps.text}
    </button>
  );
};

export default ModalButton;
