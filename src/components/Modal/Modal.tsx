import { FC } from "react";
import ModalButton from "../ModalButton/ModalButton";
import { ModalPropTypes } from "./types";
import closeButton from "@/assets/images/close-button.svg";
import classes from "./Modal.module.scss";

const Modal: FC<ModalPropTypes> = ({
  visible,
  title,
  text,
  children,
  onClose,
  onSubmit,
}) => {
  return (
    visible && (
      <div className={classes.modalWrapper}>
        <div className={classes.modal}>
          <button onClick={onClose} className={classes.closeButton}>
            <img src={closeButton} alt="Close button" />
          </button>
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
          {children}
          <div className={classes.buttonsContainer}>
            {onClose && <ModalButton type="decline" onPress={onClose} />}
            {onSubmit && <ModalButton type="submit" onPress={onSubmit} />}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
