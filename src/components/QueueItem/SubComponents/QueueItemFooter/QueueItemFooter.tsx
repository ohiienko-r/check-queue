import { FC } from "react";
import { QueueItemFooterPropTypes } from "./types";
import { getCreationTimeString } from "./helpers";
import StatusButton from "../StatusButton/StatusButton";
import classes from "./QueueItemFooter.module.scss";

const QueueItemFooter: FC<QueueItemFooterPropTypes> = ({
  collectionName,
  id,
  status,
  createdAt,
}) => {
  return (
    <div className={classes.itemFooter}>
      <div className={classes.statusContainer}>
        <h2>Status:</h2>
        <StatusButton collectionName={collectionName} id={id} status={status} />
      </div>
      <p className={classes.timeContainer}>
        {getCreationTimeString(createdAt)}
      </p>
    </div>
  );
};

export default QueueItemFooter;
