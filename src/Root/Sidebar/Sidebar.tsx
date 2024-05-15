import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import classes from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const [parent] = useAutoAnimate();
  return <aside className={classes.sidebar} ref={parent}></aside>;
};

export default Sidebar;
