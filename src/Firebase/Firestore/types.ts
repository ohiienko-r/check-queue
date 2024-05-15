import { ROLE } from "@/types";

export type UserRoleData = {
  role: (typeof ROLE)[keyof typeof ROLE];
  uid: string;
};
