import "./style.css";
import { FC, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Error from "../../components/Error";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmpassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSignUp = () => {
    let nameErr = "";
    let passwordErr = "";

    setNameError("");
    setPasswordError("");
    let array = name.split("");
    array.forEach((element) => {
      if ("0123456789".includes(element)) {
        setNameError(() => "Error");
        nameErr = "Error";
      }
    });

    if (password !== confirmPassword) {
      setPasswordError(() => "Passwords do not match");
      passwordErr = "Error";
    }

    if (!nameErr && !passwordErr) {
      console.log(name, login, password);
    }
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleLoginChange = (e: any) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setconfirmpassword(e.target.value);
  };

  return (
    <div className="window__login">
      <h1 className="login__title">Sign up</h1>
      <h2 className="info__input">Enter name</h2>
      <Input
        customPlaceholder="Name..."
        customOnChange={handleNameChange}
        customType="text"
        isDisabled={false}
      />
      <Error errorText={nameError} />
      <h2 className="info__input">Enter login</h2>
      <Input
        customPlaceholder="Login..."
        customOnChange={handleLoginChange}
        customType="text"
        isDisabled={false}
      />
      <h2 className="info__input">Enter password</h2>
      <Input
        customPlaceholder="Password..."
        customOnChange={handlePasswordChange}
        customType="password"
        isDisabled={false}
      />
      <h2 className="info__input">Confirm password</h2>
      <Input
        customPlaceholder="Confirm password..."
        customOnChange={handleConfirmPasswordChange}
        customType="password"
        isDisabled={false}
      />
      <Error errorText={passwordError} />

      <Button customClick={handleSignUp}>Sign Up</Button>
    </div>
  );
};

export default SignUp;
