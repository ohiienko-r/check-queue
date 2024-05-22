import { FC } from "react";
import { QueueItemFooterPropTypes } from "./types";
import { ItemStatus } from "@/types";
import { updateItemStatus } from "@/Firebase";
import classes from "./QueueItemFooter.module.scss";

const QueueItemFooter: FC<QueueItemFooterPropTypes> = ({
  collectionName,
  id,
  status,
}) => {
  const handleStatusUpdate = async (updatedStatus: ItemStatus) => {
    await updateItemStatus({
      collectionName: collectionName,
      id: id,
      newStatus: updatedStatus,
    });
  };
  return (
    <div className={classes.itemFooter}>
      <h2>Status:</h2>
      <button>{status}</button>
    </div>
  );
};

export default QueueItemFooter;
