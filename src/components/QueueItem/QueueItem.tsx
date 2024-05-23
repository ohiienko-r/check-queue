import { FC } from "react";
import { QueueItemPropTypes } from "./types";
import { getIndicatorColor } from "./helpers";
import {
  QueueItemHeader,
  QueueItemBody,
  QueueItemFooter,
} from "./SubComponents";
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
          status={status}
        />
        {message && <QueueItemBody message={message} />}
        <QueueItemFooter
          collectionName={collectionName}
          id={id}
          status={status}
        />
      </div>
      <div
        className={[classes.statusIndicator, getIndicatorColor(status)].join(
          " "
        )}
      ></div>
    </div>
  );
};

export default QueueItem;
