import { useAuth } from "@/Contexts";
import { mobileNavMenu } from "./helpers";
import { NavigationLink } from "@/components";
import classes from "./BottomTabs.module.scss";

const BottomTabs = () => {
  const { user } = useAuth();
  return (
    <nav className={classes.navigation}>
      {user &&
        mobileNavMenu.map((item) => (
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
