import { FC, FormEvent } from "react";
import { NewItemFormPropTypes } from "./types";
import classes from "./NewItemForm.module.scss";

const NewItemForm: FC<NewItemFormPropTypes> = ({ onSubmit }) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    await onSubmit(
      formData.get("customer") as string,
      formData.get("link") as string
    );
  };
  return (
    <form onSubmit={handleSubmit} className={classes.newItemForm}>
      <div>
        <label htmlFor="customer">Customer:</label>
        <input id="customer" type="string" name="customer" required />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input id="link" type="string" name="link" required />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewItemForm;
