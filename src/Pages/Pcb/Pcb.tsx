import { FC, useState } from "react";
import { useQueue } from "@/Hooks";
import { addNewItemToCheck } from "@/Firebase";
import { AddButton, Modal, NewItemForm } from "@/components";
import classes from "./Pcb.module.scss";

const Pcb: FC = () => {
  const queue = useQueue("pcb");
  console.log(queue);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const handleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleCreateNewItem = async (customer: string, link: string) => {
    await addNewItemToCheck({
      collectionName: "pcb",
      customer: customer,
      link: link,
      status: "open",
    });
    handleFormVisibility();
  };

  return (
    <section className={classes.pageContainer}>
      <Modal
        visible={formVisible}
        onClose={handleFormVisibility}
        title="New item"
      >
        <NewItemForm onSubmit={handleCreateNewItem} />
      </Modal>
      <AddButton onPress={handleFormVisibility} />
    </section>
  );
};

export default Pcb;
