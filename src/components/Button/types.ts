import { BUTTON_STYLE } from "./button.dto";

export type ButtonProps = {
  style?: (typeof BUTTON_STYLE)[keyof typeof BUTTON_STYLE];
  innerText: string;
  onPress: () => void;
  disabled?: boolean;
};
