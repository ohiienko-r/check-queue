import { ITEM_STATUS } from "@/types";
import { ItemStatus } from "@/types";

export const getStatusTextColor = (status: ItemStatus): string => {
  switch (status) {
    case ITEM_STATUS.OPEN:
      return "text-status__open";
    case ITEM_STATUS.CHECKING:
      return "text-status__checking";
    case ITEM_STATUS.COPLETE:
      return "text_status__complete";
    default:
      return "null";
  }
};

export const getIndicatorColor = (status: ItemStatus): string => {
  switch (status) {
    case ITEM_STATUS.OPEN:
      return "indicator-status__open";
    case ITEM_STATUS.CHECKING:
      return "indicator-status__checking";
    case ITEM_STATUS.COPLETE:
      return "indicator-status__complete";
    default:
      return "null";
  }
};
