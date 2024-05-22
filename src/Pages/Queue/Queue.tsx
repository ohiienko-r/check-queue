import { FC } from "react";
import { useQueue } from "@/Hooks";
import { AddButtonWithModal, QueueItem } from "@/components";
import { QueuePropTypes } from "./types";
import classes from "./Queue.module.scss";

const Pcb: FC<QueuePropTypes> = ({ collectionName }) => {
  const queue = useQueue(collectionName);
  console.log(queue);

  return (
    <section className={classes.pageContainer}>
      {queue.map((item) => (
        <QueueItem
          key={item.id}
          collectionName={collectionName}
          id={item.id}
          customer={item.customer}
          link={item.link}
          owner={item.owner}
          status={item.status}
        />
      ))}
      <AddButtonWithModal collectionName={collectionName} />
    </section>
  );
};

export default Pcb;
