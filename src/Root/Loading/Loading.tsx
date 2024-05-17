import { FC } from "react";
import loaderAnimation from "@/assets/animation/loader.svg";
import classes from "./Loading.module.scss";

const Loading: FC = () => {
  return (
    <div className={classes.loaderContainer}>
      <img src={loaderAnimation} alt="Loading" className={classes.loaderImg} />
      <h2>Loading</h2>
    </div>
  );
};

export default Loading;
