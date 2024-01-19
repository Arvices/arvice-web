import "./login.css"
import LoginButton from "../login-button/LoginButton"
import phone from "../../assets/images/phone.png"
import google from "../../assets/images/Google.png"
import apple from "../../assets/images/Apple.png"
import facebook from "../../assets/images/Facebook.png"
import { useNavigate } from "react-router-dom"
function Login () {
    let navigate = useNavigate()
    const onPhoneSignup =  ()=> {
        navigate("/manual-signup");
    }
    return (
        <section>
            <div id="loginsection">
                <div>
                    <div className="login-text-main">
                        <h1 className="login-head text-h3-bold">Login</h1>
                        <p className="login-text-follow text-body-regular">Continue with one of the following options</p>
                    </div>
                    <div className="login-buttons">
                        <LoginButton icon={phone} handleClick={onPhoneSignup} buttonText={'Phone Number Or Email'} />
                        <LoginButton icon={google} buttonText={'Google'} />
                        <LoginButton icon={facebook} buttonText={'Facebook'} />
                        <LoginButton icon={apple} buttonText={'Apple'} />
                    </div>
                    <div className="login-bottom-text text-small-regular">
                        <p>By continuing, you automatically agree to our terms and conditions and privacy policy.</p>
                    </div>                    
                </div>

            </div>
        </section>
    )
}

export default Login