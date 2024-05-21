import { FC } from "react";
import { AddButtonPropTypes } from "./types";
import plus from "@/assets/images/add-plus.svg";
import classes from "./AddButon.module.scss";

const AddButton: FC<AddButtonPropTypes> = ({ onPress }) => {
  return (
    <button onClick={onPress} className={classes.addButton}>
      <img src={plus} alt="Add button" />
    </button>
  );
};

export default AddButton;
