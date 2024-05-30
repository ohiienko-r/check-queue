import { CollectionName } from "@/Firebase/Firestore/types";
import { COLLECTION_NAME } from "@/types";

const rfqUrlRegExp =
  /^https:\/\/apps\.suntechcircuits\.com\/New\/QuoteCompare\?id=\d{6}$/;

const pcbUrlRegExp =
  /^https:\/\/apps\.suntechcircuits\.com\/New\/Part\?id=\d{6}$/;

export const validateLink = (url: string, collectionName: CollectionName) => {
  switch (collectionName) {
    case COLLECTION_NAME.RFQ:
      return rfqUrlRegExp.test(url);
    case COLLECTION_NAME.PCB:
      return pcbUrlRegExp.test(url);
  }
};
