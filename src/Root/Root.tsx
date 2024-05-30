import { useWidth } from "@/Hooks";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import BottomTabs from "./BottomTabs/BottomTabs";
import classes from "./Root.module.scss";
const Root = () => {
  const width = useWidth();

  return (
    <>
      {width > 800 && <Sidebar />}
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
      {width < 801 && <BottomTabs />}
    </>
  );
};

export default Root;
