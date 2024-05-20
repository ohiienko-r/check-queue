export type ModalPropTypes = {
  visible: boolean;
  title: string;
  text: string;
  onClose: () => void;
  onSubmit?: () => void;
};
