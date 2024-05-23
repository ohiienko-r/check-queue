import { CollectionName } from "@/Firebase/Firestore/types";
import { ItemStatus } from "@/types";

export type QueueItemFooterPropTypes = {
  collectionName: CollectionName;
  id: number;
  status: ItemStatus;
};
