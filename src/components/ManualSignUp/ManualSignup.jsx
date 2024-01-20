import "./ManualSignup.css"
import { useState} from "react"
import { Button } from 'antd';
import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { reqSubmitSignup } from "../../utils/requests";

function ManualSignup () {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [emailValid,setEmailValid] = useState(true)
    let [passwordValid,setPasswordValid] = useState(true)
    let [loading,setLoading] = useState(false)
    let emailValidationError = <span className="ls-warning text-small-regular">Email Not Valid</span>
    let passwordValidationError = <span className="ls-warning text-small-regular">Password should contain 8 or more character</span>

    function validateEmail () {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
             setEmailValid(emailRegex.test(email));
    }

    function validatePassword (){
        setPasswordValid(password.length >= 8)
    }

    function emailVTrue(){
        setEmailValid(true)
    }

    function passwordVTrue(){
        setPasswordValid(true)
    }

    function handlePhoneChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleContinue () {
        validateEmail()
        validatePassword()
        if(!(emailValid && passwordValid)){
            return;
        }
        // begin-loading
        setLoading(true);
        console.log("handled continue");
        let data = {
            auth_type: "manual",
            email,
            password,
            info: "this signup requires a password and email since it is manual, email has been validated on the frontend. password was checked to ensure that it is above 8 characters."
        }
        reqSubmitSignup(data).then((res)=>{
            setLoading(false)

            console.log("response data", res.data)
        }).catch(err=>{
            setLoading(false)

            console.error("An Error Occured",err.message)
        })
    }

    return (
        <section id="phone-signup-page">
            <div className="phone-signup-container mobile-padding">
                <div className="ps-text">
                    <h1>Please Input a valid Email Address</h1>
                    <p className="text-body-regular">We will check our files if you have an account already</p>
                </div>
                <div className="ps-inputs">
                    <div className="phone-email-input-container">
                        <label className="ps-input-label text-small-regular"> Email (required) </label>
                        <Input status={emailValid ? "" : "error"} onFocus={emailVTrue} onBlur={validateEmail} suffix={<UserOutlined />} value={email} onChange={handlePhoneChange} size="large" placeholder={'you@mail.com'}/>
                        {emailValid? '': emailValidationError}
                    </div>
                    <div className="password-input-container">
                        <label className="ps-input-label text-small-regular">Password (required) </label>
                        <Input.Password status={passwordValid ? "" : "error"} onFocus={passwordVTrue} onBlur={validatePassword} value={password} onChange={handlePasswordChange} size="large" placeholder={'Set A Password'}/>
                        {passwordValid? '': passwordValidationError}
                    </div>
                </div>
                <div className="continue-button">
                    <Button loading={loading} size="large" className="color-bg-primary color-fg-primary" onClick={handleContinue} shape="round">Continue</Button>
                </div>
            </div>
        </section>
    )
}   
export default ManualSignup