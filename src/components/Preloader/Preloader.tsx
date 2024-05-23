import { PreloaderPropTypes } from "./types";
import preloaderAnimation from "@/assets/animation/loader.svg";
import classes from "./Preloader.module.scss";
import { FC } from "react";

const Preloader: FC<PreloaderPropTypes> = ({ visible }) => {
  return (
    visible && (
      <div className={classes.preloaderContainer}>
        <img
          src={preloaderAnimation}
          alt="Loading"
          className={classes.preloaderImg}
        />
        <h2>Loading</h2>
      </div>
    )
  );
};

export default Preloader;
