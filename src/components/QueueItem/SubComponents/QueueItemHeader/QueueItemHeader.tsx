import { FC, useState } from "react";
import { Popover, PopoverItem } from "@/components";
import { deleteItem } from "@/Firebase";
import { QueueItemHeaderPropTypes } from "./types";
import { getLinkFirstLetter } from "./helpers";
import { getStatusTextColor } from "../../helpers";
import dotsMenu from "@/assets/images/three-dots-menu.svg";
import classes from "./QueueItemHeader.module.scss";

const QueueItemHeader: FC<QueueItemHeaderPropTypes> = ({
  collectionName,
  id,
  customer,
  link,
  owner,
  status,
}) => {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  const handlePopoverVisibility = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleItemDelete = () => {
    deleteItem({ collectionName: collectionName, id: id });
  };
  return (
    <div className={classes.itemHeader}>
      <h2>{customer}</h2>
      <div className={classes.link}>
        <h2>Link:</h2>
        <a
          href={link}
          target="_blank"
          className={getStatusTextColor(status)}
        >{`${getLinkFirstLetter(collectionName)}${id}`}</a>
      </div>
      <div className={classes.owner}>
        <p className={classes.ownerName}>{owner}</p>
        <button
          className={classes.settingsButton}
          onClick={handlePopoverVisibility}
        >
          <img src={dotsMenu} alt="Three dots menu button" />
        </button>
        <Popover
          visible={popoverVisible}
          position="bottom"
          onClose={handlePopoverVisibility}
        >
          <PopoverItem
            text="Delete"
            onPress={handleItemDelete}
            style="decline"
          />
        </Popover>
      </div>
    </div>
  );
};

export default QueueItemHeader;
