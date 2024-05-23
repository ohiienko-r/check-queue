import { FC } from "react";
import { QueueItemBodyPropTypes } from "./types";
import classes from "./QueueItemBody.module.scss";

const QueueItemBody: FC<QueueItemBodyPropTypes> = ({ message }) => {
  return (
    <div className={classes.itemBody}>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  );
};

export default QueueItemBody;
