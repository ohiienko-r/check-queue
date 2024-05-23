import { FC } from "react";
import { QueueItemFooterPropTypes } from "./types";
import StatusButton from "../StatusButton/StatusButton";
import classes from "./QueueItemFooter.module.scss";

const QueueItemFooter: FC<QueueItemFooterPropTypes> = ({
  collectionName,
  id,
  status,
}) => {
  return (
    <div className={classes.itemFooter}>
      <h2>Status:</h2>
      <StatusButton collectionName={collectionName} id={id} status={status} />
    </div>
  );
};

export default QueueItemFooter;
