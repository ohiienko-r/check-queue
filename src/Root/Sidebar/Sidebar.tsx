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
  PopoverItem,
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

  const handleHelp = () => {
    window.location.href = "mailto:ohiienko.r@gmail.com";
  };

  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.logo}>Queue</h2>
      {user && (
        <>
          <NavigationMenu config={navigationMenu} />
          <SubMenu>
            <Popover
              visible={settingsVisible}
              position="top"
              onClose={handleSettingsVisibility}
            >
              <PopoverItem
                style="decline"
                text="Sign out"
                onPress={handleLogOut}
              />
            </Popover>
            <SubMenuItem
              iconURL={settingsIcon}
              title="Settings"
              onPress={handleSettingsVisibility}
            />
            <SubMenuItem iconURL={helpIcon} title="Help" onPress={handleHelp} />
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
