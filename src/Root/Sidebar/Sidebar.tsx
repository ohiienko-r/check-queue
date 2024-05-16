import { FC } from "react";
import { useAuth } from "@/Contexts";
import userCircle from "@/assets/images/user-circle.svg";
import classes from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const user = useAuth();
  return (
    <aside className={classes.sidebar}>
      <h2 className={classes.logo}>Check Queue</h2>
      {user && (
        <div className={classes.userInfoContainer}>
          <div className={classes.userInfo}>
            <img
              src={userCircle}
              alt="User circle icon"
              className={classes.userIcon}
            />
            <div>
              <p className={classes.userName}>
                {user.displayName ?? "Gogi Serviceman"}
              </p>
              <p className={classes.userEmail}>{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
