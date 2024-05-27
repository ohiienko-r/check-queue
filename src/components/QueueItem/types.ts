import { CollectionName } from "@/Firebase/Firestore/types";
import { CheckItem } from "@/types";

export type QueueItemPropTypes = CheckItem & {
  collectionName: CollectionName;
};
