import { FC, FormEvent, useState } from "react";
import { NewItemFormPropTypes } from "./types";
import { validateLink } from "./helpers";
import classes from "./NewItemForm.module.scss";

const NewItemForm: FC<NewItemFormPropTypes> = ({
  collectionName,
  onSubmit,
}) => {
  const [linkError, setLinkError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    if (!validateLink(formData.get("link") as string, collectionName)) {
      setLinkError(true);
      throw new Error("Invalid link");
    } else {
      await onSubmit(
        formData.get("customer") as string,
        formData.get("link") as string,
        (formData.get("message") as string) ?? ""
      );
    }
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
        {linkError && <p className={classes.linkError}>Invalid link!</p>}
      </div>
      <div>
        <label htmlFor="link">Message:</label>
        <input id="message" type="string" name="message" />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewItemForm;
