import { FC, useState } from "react";
import { useAuth } from "@/Contexts";
import { Modal, NewItemForm } from "@/components";
import { addNewItemToCheck } from "@/Firebase";
import { AddButtonWithModalPropTypes } from "./types";
import { ITEM_STATUS } from "@/types";
import plus from "@/assets/images/add-plus.svg";
import classes from "./AddButonWithModal.module.scss";

const AddButton: FC<AddButtonWithModalPropTypes> = ({ collectionName }) => {
  const { user } = useAuth();
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const handleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleCreateNewItem = async (
    customer: string,
    link: string,
    message: string
  ) => {
    await addNewItemToCheck({
      collectionName: collectionName,
      customer: customer,
      link: link,
      status: ITEM_STATUS.OPEN,
      owner: (user?.displayName as string) ?? "Gogi Serviceman",
      message: message,
    });
    handleFormVisibility();
  };

  return (
    <>
      <Modal
        visible={formVisible}
        onClose={handleFormVisibility}
        title={`New ${collectionName.toUpperCase()} item`}
      >
        <NewItemForm
          collectionName={collectionName}
          onSubmit={handleCreateNewItem}
        />
      </Modal>
      <button onClick={handleFormVisibility} className={classes.addButton}>
        <img src={plus} alt="Add button" />
      </button>
    </>
  );
};

export default AddButton;
