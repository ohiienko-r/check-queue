import { FC, FormEvent } from "react";
import { logIn } from "@/Firebase";
import classes from "./Auth.module.scss";

const Auth: FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    await logIn({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  };

  return (
    <div className={classes.container}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email<span>*</span>:
          </label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">
            Password<span>*</span>:
          </label>
          <input id="password" type="password" name="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Auth;
