import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import  { Link } from "react-router-dom";

import useStatus from "../utils/useStatus";  //Using our custom hook // 

const Header = ()=>{
    const [login,setLogin] = useState("Login");
    const status = useStatus(); 
    return(
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={LOGO_URL} alt="App-Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li className="link">Active {status ? "✅" : "❎"} </li>
                    <li><Link to={"/"} className="link">Home</Link> </li>
                    <li><Link to={"/contact"} className="link">Contact Us</Link></li>
                    <li><Link to={"/about"} className="link">About</Link></li>
                    <li><Link to={"/grocery"} className="link">Grocery</Link></li>
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