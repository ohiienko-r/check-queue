import { MODAL_TYPE } from "./modal.dto";

export type ModalType = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

export type ModalPropTypes = {
  visible: boolean;
  title: string;
  text: string;
  modalType?: ModalType;
  onClose: () => void;
};
