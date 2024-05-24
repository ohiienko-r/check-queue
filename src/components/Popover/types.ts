import { ReactNode } from "react";
import { POPOVER_POSITION } from "./Popover.dto";

export type PopoverPropTypes = {
  visible: boolean;
  position: Position;
  onClose: () => void;
  children: ReactNode;
};

export type Position = (typeof POPOVER_POSITION)[keyof typeof POPOVER_POSITION];
