import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser, auth, getUserRoleData } from "@/Firebase";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getCurrentUser());
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const roleData = await getUserRoleData(user.uid);

        if (roleData) {
          setRole(roleData); // Assuming role is returned in the response
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
