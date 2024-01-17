import "./PhoneSignup.css"
import { useState } from "react"
import { ButtonMain } from "../login-button/LoginButton";

function PhoneSignup () {
    let [phoneNo, setPhoneNo] = useState("")
    function handleChange(e){
        setPhoneNo(e.target.value);
    }

    function handleContinue () {
        console.log("handled continue");
    }

    return (
        <section id="phone-signup-page">
            <div className="phone-signup-container mobile-padding">
                <div className="ps-text">
                    <h1>Let&apos;s start with your phone number</h1>
                    <p>We will check our files if you have an account already</p>
                </div>
                <div className="ps-inputs">
                    <div className="ps-input-container">
                        <label className="ps-input-label">Phone Number</label>
                        <input placeholder="+234 8045 6542" className="ps-input" type="text" value={phoneNo} onChange={handleChange}/>
                    </div>
                    <div className="ps-input-container">
                        <label className="ps-input-label">Password </label>
                        <input placeholder="+234 8045 6542" className="ps-input" type="text" value={phoneNo} onChange={handleChange}/>
                    </div>
                </div>
                <div className="continue-button">
                    <ButtonMain buttonText={'Continue'} handleClick={handleContinue} ></ButtonMain>
                </div>
            </div>
        </section>
    )
}   
export default PhoneSignup