import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./MainSection.module.scss";
import { Button } from "@/components";

const MainSection: FC<PropsWithChildren> = () => {
  return (
    <section className={classes.mainSection}>
      <Sidebar />
      <main>
        <Button innerText="Submit" onPress={() => console.log("Oh Yeah")} />
        <Outlet />
      </main>
    </section>
  );
};

export default MainSection;
