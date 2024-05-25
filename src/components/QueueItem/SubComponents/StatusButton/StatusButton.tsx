import { FC } from "react";
import { updateItemStatus } from "@/Firebase";
import { StatusButonPropTypes } from "./types";
import { getButtonStatusStyles, getNextItemStatus } from "./helpers";
import classes from "./StatusButton.module.scss";

export const StatusButton: FC<StatusButonPropTypes> = ({
  collectionName,
  id,
  status,
}) => {
  const handleStatusUpdate = async () => {
    await updateItemStatus({
      collectionName: collectionName,
      id: id,
      newStatus: getNextItemStatus(status) as string,
    });
  };

  return (
    <button
      onClick={handleStatusUpdate}
      className={[classes.statusButton, getButtonStatusStyles(status)].join(
        " "
      )}
    >
      {status}
    </button>
  );
};

export default StatusButton;
