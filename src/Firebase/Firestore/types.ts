import { ROLE, ItemStatus } from "@/types";

export type Role = (typeof ROLE)[keyof typeof ROLE];

export type UserRoleData = {
  role: Role;
  uid: string;
};

export type CollectionName = "pcb" | "rfq";

export type NewItemPropTypes = {
  collectionName: CollectionName;
  customer: string;
  link: string;
  status: ItemStatus;
};

export type UpdateItemStatusPropTypes = {
  collectionName: CollectionName;
  id: number;
  newStatus: ItemStatus;
};

export type DeleteItemPropTypes = {
  collectionName: CollectionName;
  id: number;
};
