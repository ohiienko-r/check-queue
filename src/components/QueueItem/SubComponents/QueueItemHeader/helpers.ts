import { CollectionName } from "@/Firebase/Firestore/types";
import { COLLECTION_NAME } from "@/types";

export const getLinkFirstLetter = (collectionName: CollectionName): string => {
  switch (collectionName) {
    case COLLECTION_NAME.RFQ:
      return "Q";
    case COLLECTION_NAME.PCB:
      return "P";
  }
};
