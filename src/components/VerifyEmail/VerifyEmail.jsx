import "./VerifyEmail.css";
import OTPInput from "otp-input-react";
import { useState } from "react";
import { reqSubmitOTP } from "../../utils/requests";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail } from "../../storeUtils/userSlice";
import { useNavigate } from "react-router-dom";
import { Button, Spin } from "antd";

function VerifyEmail() {
  let navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const showLoader = () => {
    setSpinning(true);
  };
  const closeLoader = () => {
    setSpinning(false);
  };
  let [OTP, setOTP] = useState("");
  let user = useSelector((state) => state.user);
  let [loading, setLoading] = useState(false);
  let [loadingTip, setLoadingTip] = useState("");
  function sendOTP() {
    let data = { email: user.email, verification_code: Number(OTP) };
    showLoader();
    setLoadingTip("Verifying OTP");
    console.log({ data });
    reqSubmitOTP(data)
      .then((res) => {
        console.log("Res", res.data);
        setLoadingTip("Verified! Please wait");
        setTimeout(() => {
          navigate("/profile-build/step-1");
          closeLoader();
        }, 1500);
      })
      .catch((err) => {
        closeLoader();
      });
  }
  return (
    <div
      id="verify-email"
      className="text-center px-3 page-main full-device-height"
    >
      <div>
        <div className="offset-top-main"></div>
        <h2>Verify this Number</h2>
        <p className="py-4">
          We have sent an OTP to this email. Please input the OTP below
        </p>
        <div className="py-4 width-fit center">
          <OTPInput
            value={OTP}
            onChange={(e) => {
              setOTP(e);
            }}
            autoFocus
            OTPLength={6}
            otpType="alphanumeric"
            disabled={false}
          />
        </div>
        <p className="text-body-bold py-2 pointer">
          Resend OTP <i className="fas fa-repeat-alt"></i>
        </p>
        <div className="pt-3 col-10 col-md-8 center">
          <Button
            loading={loading}
            size="large"
            className="color-bg-primary color-fg-primary"
            onClick={sendOTP}
            shape="round"
          >
            Verify Email
          </Button>
        </div>
      </div>
      <Spin spinning={spinning} tip={loadingTip} fullscreen />
    </div>
  );
}

export default VerifyEmail;
