import { Timestamp } from "firebase/firestore";
import { ITEM_STATUS } from "./types.dto";

export type ItemStatus = (typeof ITEM_STATUS)[keyof typeof ITEM_STATUS];

export type CheckItem = {
  id: number;
  customer: string;
  link: string;
  status: ItemStatus;
  message?: string;
  owner: string;
  createdAt: Timestamp;
};
