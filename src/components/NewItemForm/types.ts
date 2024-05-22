export type NewItemFormPropTypes = {
  onSubmit: (customer: string, link: string, message: string) => Promise<void>;
};
