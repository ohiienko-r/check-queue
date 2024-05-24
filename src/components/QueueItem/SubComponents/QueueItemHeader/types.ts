import { CollectionName } from "@/Firebase/Firestore/types";
import { ItemStatus } from "@/types";

export type QueueItemHeaderPropTypes = {
  collectionName: CollectionName;
  id: number;
  customer: string;
  link: string;
  owner: string;
  status: ItemStatus;
};
