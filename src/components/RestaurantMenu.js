import { useEffect, useState } from "react";
import { CARD_URL, MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";   //Hook that store the info related to path in it...//
export default function RestaurantMenu() {
    const [menuDetails,setMenuDetails] = useState(null);
    const {id} = useParams();  //Deconstruct Parameter from useParams Object//
 
    const fetchMenu = async()=>{
      
        const menu = await fetch(MENU_URL+id);
        const json = await menu.json();
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]);
        // const { itemCards } = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        setMenuDetails(json);
        console.log(json);
    }

    useEffect(()=>{
        fetchMenu();
    },[])

    if(menuDetails === null){
        return <Shimmer/>
    }

    const {name} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {cuisines} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {costForTwoMessage} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {avgRating} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
        <div className="menu-head">
        <h1>{name}</h1>
        <p className="menu-head-detail">{cuisines.join(", ")}</p>
        <p className="menu-head-detail">{avgRating} Rating</p>
        <p className="menu-head-detail">{costForTwoMessage}</p>
        <hr />
        </div>
       
        <ul className="menu-items-ul">
            
            {itemCards.map((item)=>{
               return <li className="menu-item-li" key={item.card.info.id}>
                <div>
                <h2>{item.card.info.name}</h2>  
                <p>&#8377;{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p> 
                </div>
                
                <div className="list-item-image">
                <img src={CARD_URL + item.card.info.imageId}  alt="Menu-Items" />
                </div>
                </li>  
            })}
           
        </ul>

    </div>
  )
}
