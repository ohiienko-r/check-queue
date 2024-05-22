import { FC } from "react";
import { QueueItemPropTypes } from "./types";
import QueueItemHeader from "../QueueItemHeader/QueueItemHeader";
import QueueItemBody from "../QueueItemBody/QueueItemBody";
import QueueItemFooter from "../QueueItemFooter/QueueItemFooter";
import classes from "./QueueItem.module.scss";

const QueueItem: FC<QueueItemPropTypes> = ({
  collectionName,
  id,
  customer,
  link,
  owner,
  message,
  status,
}) => {
  return (
    <div className={classes.item}>
      <div className={classes.contentContainer}>
        <QueueItemHeader
          collectionName={collectionName}
          id={id}
          customer={customer}
          link={link}
          owner={owner}
        />
        {message && <QueueItemBody message={message} />}
        <QueueItemFooter
          collectionName={collectionName}
          id={id}
          status={status}
        />
      </div>
      <div className={classes.statusIndicator}></div>
    </div>
  );
};

export default QueueItem;
