import { FC } from "react";
import { Button } from "@/components";
import { logOut } from "@/Firebase";
import { useAuth } from "@/Contexts";
import classes from "./Header.module.scss";

const Header: FC = () => {
  const user = useAuth();
  return (
    <header className={classes.header}>
      <h2>Check Queue</h2>
      {user && <Button style="dismiss" innerText="Sign out" onPress={logOut} />}
    </header>
  );
};

export default Header;
