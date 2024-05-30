import { useNavigate } from "react-router-dom";
import { logOut } from "@/Firebase";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { SubMenu, SubMenuItem } from "@/components";

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
    { id: 2, title: "Help", onPress: handleHelp },
    { id: 0, title: "Sign Out", onPress: handleLogOut },
  ];

  return (
    <section>
      <SubMenu>
        {settingsMenu.map((item) => (
          <SubMenuItem
            key={item.id}
            title={item.title}
            onPress={item.onPress}
          />
        ))}
      </SubMenu>
    </section>
  );
};

export default Settings;
