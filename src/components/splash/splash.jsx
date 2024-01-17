import "./splash.css"
import splashImg1 from "../../assets/images/splash-page-img-1.png"
import splashImg2 from "../../assets/images/splash-page-img-2.png"
import splashImg3 from "../../assets/images/splash-page-img-3.png"
import { useNavigate } from "react-router-dom"


function Splash (){
    let navigate = useNavigate();

        function goToLogin (){
            navigate("/login")
        }
        function goToSignup (){
            navigate("/signup")
        }

    return (
        <section id="splashpage">
            <div className="splash-container">
                <div className="splash-images container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="splash-image-1">
                            <img src={splashImg1} />
                        </div>
                        <div className="splash-image-2">
                            <img src={splashImg2} />
                        </div>
                        <div className="splash-image-3">
                            <img src={splashImg3} />
                        </div>
                    </div>
                </div>
                <div className="splash-text-main">
                    <h1 className="text-center">Arvice</h1>
                    <p className="stm-main text-center">Discover Artisans and Professionals need in your neighbourhood, Fast. ⚡</p>
                </div>
                <div className="splash-buttons">
                    <div className="button-1-container">
                        <button onClick={goToSignup} className="sb-1">Sign Up</button>
                    </div>
                    <div className="button-2-container">
                        <button onClick={goToLogin} className="sb-2">Login</button>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Splash;