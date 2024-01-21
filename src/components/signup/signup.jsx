import "./signup.css";
import LoginButton from "../login-button/LoginButton";
import envelope from "../../assets/images/envelope.png";
import google from "../../assets/images/Google.png";
import apple from "../../assets/images/Apple.png";
import facebook from "../../assets/images/Facebook.png";

import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  const onPhoneSignup = () => {
    navigate("/manual-signup");
  };
  return (
    <section>
      <div id="loginsection">
        <div>
          <div className="login-text-main">
            <h1 className="login-head text-h3-bold">Sign Up</h1>
            <p className="login-text-follow text-body-regular">
              Continue with one of the following options
            </p>
          </div>
          <div className="login-buttons">
            <LoginButton
              handleClick={onPhoneSignup}
              icon={envelope}
              buttonText={"Email Address"}
            />
            <LoginButton icon={google} buttonText={"Google"} />
            <LoginButton icon={facebook} buttonText={"Facebook"} />
            <LoginButton icon={apple} buttonText={"Apple"} />
          </div>
          <div className="login-bottom-text text-small-regular">
            <p>
              By continuing, you automatically agree to our terms and conditions
              and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
