import { QueueItemPropTypes } from "../../types";

export type StatusButonPropTypes = Omit<
  QueueItemPropTypes,
  "customer" | "link" | "message" | "owner" | "createdAt"
>;
