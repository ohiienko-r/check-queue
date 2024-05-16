import { createContext } from "react";
import { getCurrentUser } from "@/Firebase";
import { User } from "firebase/auth";

export const AuthContext = createContext<User | null>(getCurrentUser());
