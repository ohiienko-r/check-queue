import { FC } from "react";
import { useAuth } from "@/Contexts";
import { NavigationMenu, SubMenu, User } from "@/components";
import { navigationMenu, subMenu } from "./helpers";
import classes from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const { user } = useAuth();
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.logo}>Check Queue</h2>
      {user && (
        <>
          <NavigationMenu config={navigationMenu} />
          <SubMenu config={subMenu} />
          <div className={classes.userInfoContainer}>
            <User
              displayName={user.displayName as string}
              email={user.email as string}
            />
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
