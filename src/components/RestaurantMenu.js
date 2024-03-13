
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";   //Hook that store the info related to path in it...//
export default function RestaurantMenu() {
  
  const [categoryItemsIndex,setCategoryItemsIndex] = useState(null);
  
    const {id} = useParams();  //Deconstruct Parameter from useParams Object//

    const menuDetails = useRestaurantMenu(id);
   
    if(menuDetails === null){
        return <Shimmer/>
    }

    const {name} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {cuisines} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {costForTwoMessage} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const {avgRating} = menuDetails?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categoryList = menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categoryList);
  return (
    <div className="menu">
        <div className="menu-head">
        <h1 className="font-serif font-black text-[40px] text-center text-red-600">{name}</h1> 
        <p className="menu-head-detail text-center font-medium">{cuisines.join(", ")}</p>
        <p className="menu-head-detail text-center font-medium">{avgRating} Rating</p>
        <p className="menu-head-detail text-center font-medium">{costForTwoMessage}</p>
        <hr />
        </div>
       

        <div className="menu-items-div">
          {categoryList.map((item,index)=>{
            return <div key={index} className="category-list">
              <MenuCategory category={item} categoryItems={index === categoryItemsIndex ? true : false} setCategoryItemsIndex={()=> setCategoryItemsIndex(index)} />
            </div>
          })}
        </div>

        {/* <ul className="menu-items-ul">
            
            {itemCards.map((item)=>{
               return <li className="menu-item-li flex justify-between mx-60 mt-5 " key={item.card.info.id}>
                <div >
                <h2 className="font-semibold text-2xl whitespace-nowrap mt-5">{item.card.info.name}</h2>  
                <p >&#8377;{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p> 
                </div>
                
                <div className="list-item-image size-40 ">
                <img src={CARD_URL + item.card.info.imageId}  alt="Menu-Items" className="rounded-lg"/>
                </div>
                </li>  
            })}
           
        </ul> */}

    </div>
  )
}
