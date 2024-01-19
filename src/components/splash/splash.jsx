import "./splash.css"
import splashImg1 from "../../assets/images/splash-page-img-1.png"
import splashImg2 from "../../assets/images/splash-page-img-2.png"
import splashImg3 from "../../assets/images/splash-page-img-3.png"
import { useNavigate } from "react-router-dom"
import { Button } from 'antd';

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
                    <div className="row justify-content-center align-items-center center-only">
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
                    <h1 className="text-center text-h2-bold">Arvice</h1>
                    <p className="stm-main center text-center">Discover Artisans and Professionals need in your neighbourhood, Fast. ⚡</p>
                </div>
                <div className="splash-buttons center">
                    <div className="button-1-container">
                        <Button size="large" className="color-bg-primary color-fg-primary" onClick={goToSignup} shape="round">Sign Up</Button>
                    </div>
                    <div className="button-2-container">
                        <Button size="large" shape="round" onClick={goToLogin}>Login</Button>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Splash;