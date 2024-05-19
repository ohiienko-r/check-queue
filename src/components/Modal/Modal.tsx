import { FC } from "react";
import { ModalPropTypes } from "./types";
import { getBorderColor } from "./helpers";
import classes from "./Modal.module.scss";

const Modal: FC<ModalPropTypes> = ({
  modalType,
  visible,
  title,
  text,
  onClose,
}) => {
  return (
    visible && (
      <div className={classes.modalWrapper}>
        <div
          className={[
            classes.modal,
            modalType && getBorderColor(modalType),
          ].join(" ")}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="-0.5 0 25 25"
            fill="none"
            className={classes.closeButton}
            onClick={onClose}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3 21.32L21 3.32001"
                stroke="#F0EFEF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3.32001L21 21.32"
                stroke="#F0EFEF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
