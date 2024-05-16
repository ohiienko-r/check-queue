import { FC } from "react";
import Button from "../Button/Button";
import { ModalPropTypes } from "./types";
import { getBorderColor } from "./helpers";
import classes from "./Modal.module.scss";

const Modal: FC<ModalPropTypes> = ({
  modalType,
  title,
  text,
  onSubmit,
  onClose,
}) => {
  return (
    <div className={classes.modalWrapper}>
      <div
        className={[classes.modal, modalType && getBorderColor(modalType)].join(
          " "
        )}
      >
        <h2>{title}</h2>
        <p>{text}</p>

        <div className={classes.buttonsContainer}>
          <Button style="dismiss" innerText="Close" onPress={onClose} />
          <Button innerText="Ok" onPress={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
