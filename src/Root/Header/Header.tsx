import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "@/components";
import { logOut } from "@/Firebase";
import { useAuth } from "@/Contexts";
import classes from "./Header.module.scss";

const Header: FC = () => {
  const auth = useAuth();
  const [parent] = useAutoAnimate();

  return (
    <header className={classes.header} ref={parent}>
      <h2>Check Queue</h2>
      {auth?.user && (
        <Button style="dismiss" innerText="Sign out" onPress={logOut} />
      )}
    </header>
  );
};

export default Header;
