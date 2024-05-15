import { FC } from "react";
import { Button } from "@/components";
import classes from "./Auth.module.scss";

const Auth: FC = () => {
  return (
    <div className={classes.container}>
      <h3>Sign In</h3>
      <form action="">
        <div>
          <label htmlFor="email">
            Email<span>*</span>:
          </label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">
            Password<span>*</span>:
          </label>
          <input id="password" type="password" />
        </div>
      </form>
      <Button innerText="Sign In" onPress={() => console.log("Nice try bro")} />
    </div>
  );
};

export default Auth;
