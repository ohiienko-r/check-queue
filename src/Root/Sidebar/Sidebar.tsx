import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Contexts";
import { logOut } from "@/Firebase";
import {
  NavigationMenu,
  SubMenu,
  SubMenuItem,
  User,
  Popover,
} from "@/components";
import { navigationMenu } from "./helpers";
import { ROUTES_NAMES } from "@/Router/routes-names";
import settingsIcon from "@/assets/images/settings.svg";
import helpIcon from "@/assets/images/help.svg";
import classes from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

  const handleSettingsVisibility = () => {
    setSettingsVisible(!settingsVisible);
  };

  const handleLogOut = async () => {
    setSettingsVisible(false);
    await logOut();
    navigate(ROUTES_NAMES.ROOT);
  };

  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.logo}>Check Queue</h2>
      {user && (
        <>
          <NavigationMenu config={navigationMenu} />
          <SubMenu>
            <Popover
              visible={settingsVisible}
              onClose={handleSettingsVisibility}
            >
              <li onClick={handleLogOut} style={{ cursor: "pointer" }}>
                Sign out
              </li>
            </Popover>
            <SubMenuItem
              iconURL={settingsIcon}
              title="Settings"
              onPress={handleSettingsVisibility}
            />
            <SubMenuItem iconURL={helpIcon} title="Help" onPress={() => {}} />
          </SubMenu>
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
