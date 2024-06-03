import { useNavigate } from "react-router-dom";
import { logOut } from "@/Firebase";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { SettingsMenu, SettingsMenuItem } from "@/components";
import classes from "./Settings.module.scss";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    navigate(ROUTES_NAMES.ROOT);
  };

  const handleHelp = () => {
    window.location.href = "mailto:ohiienko.r@gmail.com";
  };

  const settingsMenu = [
    { id: 0, title: "New user", onPress: () => {} },
    { id: 1, title: "Help", onPress: handleHelp, decline: false },
    { id: 2, title: "Sign Out", onPress: handleLogOut, decline: true },
  ];

  return (
    <section className={classes.settings}>
      <SettingsMenu>
        {settingsMenu.map((item) => (
          <SettingsMenuItem
            key={item.id}
            title={item.title}
            onPress={item.onPress}
            decline={item.decline}
          />
        ))}
      </SettingsMenu>
    </section>
  );
};

export default Settings;
