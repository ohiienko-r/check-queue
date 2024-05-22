import { CollectionName } from "@/Firebase/Firestore/types";

export type QueueItemHeaderPropTypes = {
  collectionName: CollectionName;
  id: number;
  customer: string;
  link: string;
  owner: string;
};
