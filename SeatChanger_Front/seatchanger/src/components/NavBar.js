import "../styles/NavBar.css"
import logo from "../imgs/logo.png";
import login from "../imgs/login.png";

import { Link } from "react-router-dom";

export default function NavBar() {
    return (<>
        <div className="nav">
            <img className="logo" src={logo}/>
            <h1> <Link to="/"> 1-2 자리 바꾸기 </Link> </h1>
            <h1> <Link to="/raffle"> 자리 뽑기 </Link> </h1>
            {
                localStorage.getItem("is_login") == 'true' ?
                (<h1 className="already_login" onClick={(e) => {
                    localStorage.removeItem("my_name");
                    localStorage.removeItem("is_login");
                    window.location.replace("/login");
                }}> {localStorage.getItem("my_name")} </h1>)
                :
                <img className="login" src={login} onClick={(e) => {
                    window.location.replace("/login");
                }}/>
            }
            <pre className="view_mode">🌑</pre>
        </div>
    </>)
}