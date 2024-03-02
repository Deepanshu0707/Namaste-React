import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    const [login,setLogin] = useState("Login");
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="App-Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }} >{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;