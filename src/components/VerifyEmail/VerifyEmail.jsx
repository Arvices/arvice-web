import "./VerifyEmail.css"
import OTPInput from "otp-input-react"
import {useState} from "react"
import { reqSubmitOTP } from "../../utils/requests";
import {useSelector, useDispatch} from "react-redux"
import { updateEmail } from "../../storeUtils/userSlice";
import { Button } from "antd";

function VerifyEmail() {
  let [OTP, setOTP] = useState("");
  let user = useSelector((state)=> state.user)
  let [loading,setLoading]= useState(false)
  function sendOTP () {
    let data = {email: user.email, verification_code: OTP}
    setLoading(true)
    console.log({data})
    reqSubmitOTP(data).then(res=> {      
    setLoading(false)
      alert(JSON.stringify(res))
    }).catch(err=>{
      setLoading(false)
      alert(JSON.stringify(err))
    })
  }
  return (
    <div id="verify-email" className="text-center p-3">
      <div className="offset-top-main"></div>
      <h2>Verify this Number</h2>
      <p className="py-4">
        We have sent an OTP to this email. Please input the OTP below
      </p>
      <div className="py-4 width-fit center">
      <OTPInput value={OTP} onChange={(e)=>{setOTP(e)}} autoFocus OTPLength={6} otpType="alphanumeric" disabled={false} />
      </div>
      <p className="text-body-bold py-2">Resend OTP <i className="fas fa-repeat-alt"></i></p>
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
  )
}

export default VerifyEmail;
