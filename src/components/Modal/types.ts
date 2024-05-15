import { BORDER_TYPE } from "./modal.dto";

export type ModalPropTypes = {
  modalType?: (typeof BORDER_TYPE)[keyof typeof BORDER_TYPE];
  title: string;
  text: string;
  onSubmit: () => void;
  onClose: () => void;
};
