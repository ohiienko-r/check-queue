import { ItemStatus } from "@/types";
import { ITEM_STATUS } from "@/types";
import classes from "./StatusButton.module.scss";

export const getButtonStatusStyles = (status: ItemStatus) => {
  switch (status) {
    case ITEM_STATUS.OPEN:
      return classes.open;
    case ITEM_STATUS.CHECKING:
      return classes.checking;
    case ITEM_STATUS.COPLETE:
      return classes.complete;
  }
};

export const getNextItemStatus = (status: ItemStatus) => {
  switch (status) {
    case ITEM_STATUS.OPEN:
      return ITEM_STATUS.CHECKING;
    case ITEM_STATUS.CHECKING:
      return ITEM_STATUS.COPLETE;
    case ITEM_STATUS.COPLETE:
      return ITEM_STATUS.OPEN;
  }
};
