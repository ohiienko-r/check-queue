import { FC, FormEvent, useState } from "react";
import { Modal } from "@/components";
import { logIn } from "@/Firebase";
import { validateAuthData } from "./helpers";
import classes from "./Auth.module.scss";

const Auth: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    if (
      validateAuthData(
        formData.get("email") as string,
        formData.get("password") as string
      )
    ) {
      try {
        await logIn({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });
      } catch (error) {
        handleModalVisibility();
        throw new Error(`AN ERROR OCCURED: ${error}`);
      }
    } else {
      handleModalVisibility();
      throw new Error(
        "AN ERROR OCCURED: please provide correct email and password"
      );
    }
  };

  const modalHeader = "Error!";
  const modalText =
    "An error has occured! Please check the validity of auth data.";

  return (
    <div className={classes.container}>
      <Modal
        visible={modalVisible}
        title={modalHeader}
        text={modalText}
        onClose={handleModalVisibility}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Auth;
