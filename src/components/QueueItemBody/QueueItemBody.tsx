import { FC } from "react";
import { QueueItemBodyPropTypes } from "./types";

const QueueItemBody: FC<QueueItemBodyPropTypes> = ({ message }) => {
  return (
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  );
};

export default QueueItemBody;
