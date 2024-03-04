import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import  { Link } from "react-router-dom";


const Header = ()=>{
    const [login,setLogin] = useState("Login");
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="App-Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li><Link to={"/"} className="link">Home</Link> </li>
                    <li><Link to={"/contact"} className="link">Contact Us</Link></li>
                    <li><Link to={"/about"} className="link">About</Link></li>
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