import "./style.css";
import { FC, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { credentials } from "../../data/credentials";

const Login = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleLogin = () => {
    if (
      nameValue == credentials.login &&
      passwordValue == credentials.password
    ) {
      setMessage("Welcome");
    } else {
      setMessage("Error");
    }

    if (nameValue !== credentials.login) {
      setNameError("Incorrect Login");
    }
    if (passwordValue !== credentials.password) {
      setPasswordError("Incorrect password");
    }
  };

  return (
    <div className="window__login">
      <h1 className="login__title">Log in</h1>
      <p className="login__title__info">to start learning</p>
      <h2 className="info__input">Twitter handle</h2>
      <Input
        customPlaceholder="Login"
        customOnChange={(e: any) => setNameValue(e.target.value)}
        customType="Login"
        isDisabled={false}
      />
      <p className="error">{nameError}</p>
      <h2 className="info__input">Password</h2>
      <Input
        customPlaceholder="Password"
        customOnChange={(e: any) => setPasswordValue(e.target.value)}
        customType="Password"
        isDisabled={false}
      />
      <p className="error">{passwordError}</p>
      <h2 className="info__input">Forgot password</h2>
      <Button customClick={handleLogin}>Log in</Button>
      <p className="info__input">
        Don`t have an account? <a href="sign up">Sign up now!</a>
      </p>

      <p
        className={
          message == "Welcome" ? "message__color-green" : "message__color-red"
        }
      >
        {/* {message} */}
      </p>
    </div>
  );
};

export default Login;
