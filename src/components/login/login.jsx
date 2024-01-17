import "./login.css"
import LoginButton from "../login-button/LoginButton"
import phone from "../../assets/images/phone.png"
import google from "../../assets/images/Google.png"
import apple from "../../assets/images/Apple.png"
import facebook from "../../assets/images/Facebook.png"

function Login () {
    return (
        <section>
            <div id="loginsection">
                <div>
                    <div className="login-text-main">
                        <h1 className="login-head">Login</h1>
                        <p className="login-text-follow">Continue with one of the following options</p>
                    </div>
                    <div className="login-buttons">
                        <LoginButton icon={phone} buttonText={'Phone Number'} />
                        <LoginButton icon={google} buttonText={'Google'} />
                        <LoginButton icon={facebook} buttonText={'Facebook'} />
                        <LoginButton icon={apple} buttonText={'Apple'} />
                    </div>
                    <div className="login-bottom-text">
                        <p>By continuing, you automatically agree to our terms and conditions and privacy policy.</p>
                    </div>                    
                </div>

            </div>
        </section>
    )
}

export default Login