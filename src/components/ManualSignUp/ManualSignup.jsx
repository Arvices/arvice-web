import "./ManualSignup.css"
import { useState } from "react"
import { Button } from 'antd';
import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';

function ManualSignup () {
    let [phoneNo, setPhoneNo] = useState("")
    let [password, setPassword] = useState("")
    function handlePhoneChange(e){
        setPhoneNo(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleContinue () {
        console.log("handled continue");
    }

    return (
        <section id="phone-signup-page">
            <div className="phone-signup-container mobile-padding">
                <div className="ps-text">
                    <h1>Input a valid Phone Number or Email Address</h1>
                    <p className="text-body-regular">We will check our files if you have an account already</p>
                </div>
                <div className="ps-inputs">
                    <div className="phone-email-input-container">
                        <label className="ps-input-label text-small-regular">Phone Number Or Email (required) </label>
                        <Input suffix={<UserOutlined />} value={phoneNo} onChange={handlePhoneChange} size="large" placeholder={'Phone No or Email'}/>
                    </div>
                    <div className="password-input-container">
                        <label className="ps-input-label text-small-regular">Password (required) </label>
                        <Input.Password value={password} onChange={handlePasswordChange} size="large" placeholder={'Set A Password'}/>
                    </div>
                </div>
                <div className="continue-button">
                    <Button size="large" className="color-bg-primary color-fg-primary" onClick={handleContinue} shape="round">Continue</Button>
                </div>
            </div>
        </section>
    )
}   
export default ManualSignup