import { FC } from "react";
import { User, SubMenuItem, NavigationMenu } from "@/components";
import { useAuth } from "@/Contexts";
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
          <ul className={classes.subMenu}>
            {subMenu.map((item) => (
              <SubMenuItem
                key={item.id}
                iconURL={item.iconUrl}
                title={item.title}
                onPress={item.onPress}
              />
            ))}
          </ul>
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
