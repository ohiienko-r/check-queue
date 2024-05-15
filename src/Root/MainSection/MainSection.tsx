import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./MainSection.module.scss";

const MainSection: FC<PropsWithChildren> = () => {
  return (
    <section className={classes.mainSection}>
      <Sidebar />
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </section>
  );
};

export default MainSection;
