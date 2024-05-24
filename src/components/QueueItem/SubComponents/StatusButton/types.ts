import { CollectionName } from "@/Firebase/Firestore/types";
import { ItemStatus } from "@/types";

export type StatusButonPropTypes = {
  collectionName: CollectionName;
  id: number;
  status: ItemStatus;
};
