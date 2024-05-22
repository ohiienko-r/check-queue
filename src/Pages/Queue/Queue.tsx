import { FC } from "react";
import { useQueue } from "@/Hooks";
import { AddButtonWithModal } from "@/components";
import { QueuePropTypes } from "./types";
import classes from "./Queue.module.scss";

const Pcb: FC<QueuePropTypes> = ({ collectionName }) => {
  const queue = useQueue(collectionName);
  console.log(queue);

  return (
    <section className={classes.pageContainer}>
      {queue.map((item) => (
        <p key={item.id}>{item.customer}</p>
      ))}
      <AddButtonWithModal collectionName={collectionName} />
    </section>
  );
};

export default Pcb;
