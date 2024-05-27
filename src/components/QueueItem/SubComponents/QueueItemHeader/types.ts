import { QueueItemPropTypes } from "../../types";

export type QueueItemHeaderPropTypes = Omit<
  QueueItemPropTypes,
  "message" | "createdAt"
>;
