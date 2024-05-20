import { ReactNode } from "react";

export type PopoverPropTypes = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};
