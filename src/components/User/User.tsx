import { FC } from "react";
import userCircle from "@/assets/images/user-circle.svg";
import { UserPropTypes } from "./types";
import classes from "./User.module.scss";

const User: FC<UserPropTypes> = ({ photoURL, displayName, email }) => {
  return (
    <div className={classes.userInfo}>
      <img
        src={photoURL ?? userCircle}
        alt="User circle icon"
        className={classes.userIcon}
      />
      <div>
        <p className={classes.userName}>{displayName ?? "Gogi Serviceman"}</p>
        <p className={classes.userEmail}>{email}</p>
      </div>
    </div>
  );
};

export default User;
