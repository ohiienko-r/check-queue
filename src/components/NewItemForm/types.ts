import { CollectionName } from "@/Firebase/Firestore/types";

export type NewItemFormPropTypes = {
  collectionName: CollectionName;
  onSubmit: (customer: string, link: string, message: string) => Promise<void>;
};
