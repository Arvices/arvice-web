import "./VerifyEmail.css"
import OTPInput from "otp-input-react"
import {useState} from "react"
import { reqSubmitOTP } from "../../utils/requests";
import {useSelector, useDispatch} from "react-redux"
import { updateEmail } from "../../storeUtils/userSlice";

function VerifyEmail() {
  let [OTP, setOTP] = useState("");
  let user = useSelector((state)=> state.user)
  function sendOTP (OTP) {
    reqSubmitOTP(OTP).then(res=> {
      alert(JSON.stringify(res))
    }).catch(err=>{
      alert(JSON.stringify(err))
    })
  }
  return (
    <div id="verify-email">
      <div className="offset-top-main"></div>
      <h1>Verify this Number</h1>
      <p className="py-4">
        We have sent an OTP to this email. Please input the OTP below
      </p>
      <div className="py-4 width-fit center">
      <OTPInput value={OTP} onChange={(e)=>{setOTP(e)}} autoFocus OTPLength={6} otpType="alphanumeric" disabled={false} />
      </div>
      <p className="text-body-bold py-2">Resend OTP <i className="fas fa-repeat-alt"></i></p>
      <button>Verify Button</button>
    </div>
  );
}

export default VerifyEmail;
