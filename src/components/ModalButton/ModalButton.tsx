import { FC } from "react";
import { getTypeStyleAndText } from "./helpers";
import { ModalButtonPropTypes } from "./types";
import classes from "./ModalButton.module.scss";

const ModalButton: FC<ModalButtonPropTypes> = ({ type, onPress }) => {
  const buttonProps = getTypeStyleAndText(type);
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
