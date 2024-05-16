import { FC } from "react";
import { User, SubMenuItem, NavLink } from "@/components";
import { useAuth } from "@/Contexts";
import { navigationMenu } from "./helpers";
import settingsIcon from "@/assets/images/settings.svg";
import helpIcon from "@/assets/images/help.svg";

import classes from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const user = useAuth();
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.logo}>Check Queue</h2>
      {user && (
        <>
          <ul className={classes.navList}>
            {navigationMenu.map((menuItem) => (
              <NavLink
                title={menuItem.title}
                routName={menuItem.route}
                key={menuItem.id}
              />
            ))}
          </ul>
          <ul className={classes.subMenu}>
            <SubMenuItem
              iconURL={settingsIcon}
              title="Settings"
              onPress={() => console.log("settings")}
            />
            <SubMenuItem
              iconURL={helpIcon}
              title="Help"
              onPress={() => console.log("help")}
            />
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
