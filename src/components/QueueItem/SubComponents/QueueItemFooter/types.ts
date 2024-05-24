import { CollectionName } from "@/Firebase/Firestore/types";
import { ItemStatus } from "@/types";
import { Timestamp } from "firebase/firestore";

export type QueueItemFooterPropTypes = {
  collectionName: CollectionName;
  id: number;
  status: ItemStatus;
  createdAt: Timestamp;
};
