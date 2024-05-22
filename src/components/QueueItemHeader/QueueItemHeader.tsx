import { FC } from "react";
import { QueueItemHeaderPropTypes } from "./types";
import { getLinkFirstLetter } from "./helpers";
import dotsMenu from "@/assets/images/three-dots-menu.svg";
import classes from "./QueueItemHeader.module.scss";

const QueueItemHeader: FC<QueueItemHeaderPropTypes> = ({
  collectionName,
  id,
  customer,
  link,
  owner,
}) => {
  return (
    <div className={classes.itemHeader}>
      <h2>{customer}</h2>
      <div className={classes.link}>
        <h2>Link:</h2>
        <a href={link} target="_blank">{`${getLinkFirstLetter(
          collectionName
        )}${id}`}</a>
      </div>
      <div className={classes.owner}>
        <p>{owner}</p>
        <button className={classes.settingsButton}>
          <img src={dotsMenu} alt="Three dots menu button" />
        </button>
      </div>
    </div>
  );
};

export default QueueItemHeader;
