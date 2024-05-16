import { User } from "firebase/auth";

export interface AuthContextValue {
  user: User | null;
  role: string | null;
}
