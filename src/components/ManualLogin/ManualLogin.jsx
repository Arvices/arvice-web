import "./ManualLogin.css";
import { useState } from "react";
import { Button } from "antd";
import { Input, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { reqSubmitLogin } from "../../utils/requests";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail } from "../../storeUtils/userSlice";
import { useNavigate } from "react-router-dom";

function ManualLogin() {
  let navigate = useNavigate();
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailValid, setEmailValid] = useState(true);
  let [passwordValid, setPasswordValid] = useState(true);
  let [spinning, setSpinning] = useState(false);
  let emailValidationError = (
    <span className="ls-warning text-small-regular">Email Not Valid</span>
  );
  let passwordValidationError = (
    <span className="ls-warning text-small-regular">
      Password should contain 8 or more characters
    </span>
  );

  function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(email));
  }

  function validatePassword() {
    setPasswordValid(password.length >= 8);
  }

  function emailVTrue() {
    setEmailValid(true);
  }

  function passwordVTrue() {
    setPasswordValid(true);
  }

  function handlePhoneChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleContinue() {
    validateEmail();
    validatePassword();
    if (!(emailValid && passwordValid)) {
      return;
    }
    // begin-loading
    setSpinning(true);
    let data = {
      email_or_username_or_phonenumber: email,
      password,
    };
    console.log('data', data)
    reqSubmitLogin(data)
      .then((res) => {
        console.log("res", res);
        setTimeout(()=>{
          setSpinning(false);
          dispatch(updateEmail(email));
          navigate("/main");
        }, 1200)
      })
      .catch((err) => {
        console.error(err.message);
        setSpinning(false);
      });
  }

  return (
    <section id="phone-signup-page" className="page-main full-device-height">
      <div className="phone-signup-container mobile-padding">
        <div className="ps-text">
          <h1>Login To Your Account.</h1>
          <p className="text-body-regular">
            Please Input your Email Address and Password to Login
          </p>
        </div>
        <div className="ps-inputs">
          <div className="phone-email-input-container">
            <label className="ps-input-label text-small-regular">
              Email (required)
            </label>
            <Input
              status={emailValid ? "" : "error"}
              onFocus={emailVTrue}
              onBlur={validateEmail}
              suffix={<UserOutlined />}
              value={email}
              onChange={handlePhoneChange}
              size="large"
              placeholder={"you@mail.com"}
            />
            {emailValid ? "" : emailValidationError}
          </div>
          <div className="password-input-container">
            <label className="ps-input-label text-small-regular">
              Password (required){" "}
            </label>
            <Input.Password
              status={passwordValid ? "" : "error"}
              onFocus={passwordVTrue}
              onBlur={validatePassword}
              value={password}
              onChange={handlePasswordChange}
              size="large"
              placeholder={"Set A Password"}
            />
            {passwordValid ? "" : passwordValidationError}
          </div>
        </div>
        <div className="continue-button">
          <Button
            size="large"
            className="color-bg-primary color-fg-primary"
            onClick={handleContinue}
            shape="round"
          >
            Continue
          </Button>
        </div>
      </div>
      <Spin fullscreen tip={'Logging In, Please Wait'} spinning={spinning}></Spin>
    </section>
  );
}

export default ManualLogin;
