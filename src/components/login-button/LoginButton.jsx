import "./LoginButton.css"
function LoginButton (props) {
    let { buttonText , icon, handleClick } = props
    return (
        <div>
            <button onClick={handleClick} className="loginButton"> <img src={icon} /> {buttonText}</button>
        </div>
    )
}
export function ButtonMain (props) {
    let { buttonText , icon, handleClick, styleObj } = props
    let img = icon ? <img src={icon} />: "" 
    return (
        <div>
            <button onClick={handleClick} style={styleObj} className="buttonMain">{img} {buttonText}</button>
        </div>
    )
}

export default LoginButton