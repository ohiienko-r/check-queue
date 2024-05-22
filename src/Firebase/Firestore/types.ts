import { ROLE, ItemStatus, COLLECTION_NAME } from "@/types";

export type Role = (typeof ROLE)[keyof typeof ROLE];

export type UserRoleData = {
  role: Role;
  uid: string;
};

export type CollectionName =
  (typeof COLLECTION_NAME)[keyof typeof COLLECTION_NAME];

export type NewItemPropTypes = {
  collectionName: CollectionName;
  customer: string;
  link: string;
  status: ItemStatus;
  owner: string;
  message?: string | null;
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
