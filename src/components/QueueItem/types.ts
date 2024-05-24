import { CollectionName } from "@/Firebase/Firestore/types";
import { ItemStatus } from "@/types";
import { Timestamp } from "firebase/firestore";

export type QueueItemPropTypes = {
  collectionName: CollectionName;
  id: number;
  customer: string;
  link: string;
  owner: string;
  message?: string;
  status: ItemStatus;
  createdAt: Timestamp;
};
