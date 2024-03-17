import {useContext, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import  { Link } from "react-router-dom";

import useStatus from "../utils/useStatus";  //Using our custom hook // 

import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";


const Header = ()=>{
    const [login,setLogin] = useState("Login");
    const status = useStatus(); 
    const {loginUser} = useContext(UserContext);
    const cartValue = useSelector((state)=>state.cart.items);    
    // console.log(cartValue);
    return(
        <div className="header flex justify-between ml-[15px] mt-[-5px] pr-4 bg-green-100 ">
            <div className="logo_container">
                <img className="logo h-50 w-40" src={LOGO_URL} alt="App-Logo"/>
            </div>
            <div className="nav-items flex justify-center items-center  ">
                <ul className="list flex gap-10">
                    <li className="font-mono  font-medium text-[25px]" >Active {status ? "✅" : "❎"} </li>
                    <li className="font-mono font-medium text-[25px] hover:bg-gray-100 cursor-pointer"><Link to={"/"} className="link">Home</Link> </li>
                    <li className="font-mono font-medium text-[25px] hover:bg-gray-100 cursor-pointer"><Link to={"/contact"} className="link">Contact Us</Link></li>
                    <li className="font-mono font-medium text-[25px] hover:bg-gray-100 cursor-pointer"><Link to={"/about"} className="link">About</Link></li>
                    <li className="font-mono font-medium text-[25px] hover:bg-gray-100 cursor-pointer"><Link to={"/grocery"} className="link">Grocery</Link></li>
                    <li className="font-mono font-bold text-[25px] hover:bg-gray-100 cursor-pointer"><Link to={"/cart"} className="link">Cart({cartValue.length})</Link></li>
                    <li className="font-mono font-medium text-[25px] hover:bg-gray-100 cursor-pointer">{loginUser}</li>
                    <button className="login font-mono  font-medium text-[25px] hover:bg-slate-100" onClick={()=>{
                        login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }} >{login}</button>
                   
                </ul>
            </div>
        </div>
    )
}

export default Header;