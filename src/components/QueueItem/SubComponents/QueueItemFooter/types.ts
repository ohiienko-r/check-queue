import { QueueItemPropTypes } from "../../types";

export type QueueItemFooterPropTypes = Omit<
  QueueItemPropTypes,
  "customer" | "link" | "message" | "owner"
>;
