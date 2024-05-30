import { navigationMenu } from "../Sidebar/helpers";
import { NavigationLink } from "@/components";
import classes from "./BottomTabs.module.scss";

const BottomTabs = () => {
  return (
    <nav className={classes.navigation}>
      {navigationMenu.map((item) => (
        <NavigationLink
          key={item.id}
          title={item.title}
          routeName={item.routeName}
        />
      ))}
    </nav>
  );
};

export default BottomTabs;
