import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Root.module.scss";
const Root = () => {
  return (
    <>
      <Sidebar />
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
