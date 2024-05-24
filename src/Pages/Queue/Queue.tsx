import { FC } from "react";
import { useQueue } from "@/Hooks";
import { AddButtonWithModal, QueueItem } from "@/components";
import Preloader from "@/components/Preloader/Preloader";
import { QueuePropTypes } from "./types";
import classes from "./Queue.module.scss";

const Pcb: FC<QueuePropTypes> = ({ collectionName }) => {
  const { queue, loading } = useQueue(collectionName);
  return (
    <>
      <section className={classes.pageContainer}>
        <Preloader visible={loading} />
        {queue.map((item) => (
          <QueueItem
            key={item.id}
            collectionName={collectionName}
            id={item.id}
            customer={item.customer}
            link={item.link}
            owner={item.owner}
            message={item.message}
            status={item.status}
            createdAt={item.createdAt}
          />
        ))}
      </section>
      <AddButtonWithModal collectionName={collectionName} />
    </>
  );
};

export default Pcb;
