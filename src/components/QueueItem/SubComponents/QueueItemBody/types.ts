import { QueueItemPropTypes } from "../../types";

export type QueueItemBodyPropTypes = Omit<
  QueueItemPropTypes,
  | "collectionName"
  | "id"
  | "customer"
  | "link"
  | "status"
  | "owner"
  | "createdAt"
>;
