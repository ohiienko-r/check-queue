import { ReactNode } from "react";

export type ModalPropTypes = {
  visible: boolean;
  title?: string;
  text?: string;
  children?: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
};
