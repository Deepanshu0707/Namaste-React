
import { CARD_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../utils/cartSlice";
import { useState } from "react";


export default function MenuCategory({category, categoryItems, setCategoryItemsIndex}) {
  const [itemCounts, setItemCounts] = useState({});
  const cartItems = useSelector((state)=>state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  
      const handleAddItem = (item,idx)=>{
          dispatch(addItem(item));

          // Setting State for each items so basically we are making an state object in which each item have there own count in it as name is key and value is how many times it is added.//
          setItemCounts((oldValue)=>(
            {...oldValue, 
              [item.card.info.name] : (oldValue[item.card.info.name] || 0) + 1
            }
          ))}
      
      const handleRemoveItem = (item,idx)=>{
          dispatch(removeItem(item));
          if(itemCounts[item.card.info.name] > 0){
            setItemCounts((oldValue)=>(
              {
                ...oldValue,
                  [item.card.info.name] : oldValue[item.card.info.name] - 1
              }
            ))
          }
          
      }
        const btnOnClick = () => {
        setCategoryItemsIndex();
        };

  return (
    <div className="menu w-7/12 m-auto mt-4 bg-zinc-100 ">
      <div
        className="accordian-title mb-4 flex justify-between ml-2 cursor-pointer h-12 "
        onClick={btnOnClick}
      >
        <h1 className="font-bold text-2xl">
          {category.card.card.title} ({category.card.card.itemCards.length})
        </h1>
        <p className="mr-[75px] text-[19px] font-bold">⬇️</p>
      </div>
      
     {categoryItems && <div className="accordianItems  border-gray-200">
        {category?.card?.card?.itemCards?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="accordianItemDiv mb-4 flex border-blue-200 border-b-[3px] shadow-md"
            >
              <div className="w-10/12 ml-2">
                <h1 className="font-semibold text-[18px]">
                  {item.card.info.name}
                </h1>
                <p className="font-semibold text-[16px] mb-4">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
                <p className="mb-4 font-extralight text-[18px] text-gray-400">
                  {item.card.info.description}
                </p>
              </div>
              <div>
                <img
                  className="rounded-lg  h-[100px] w-[150px] object-cover "
                  src={CARD_URL + item.card.info.imageId}
                  alt="MenuItems-Img"
                />
                <div className="text-lime-200 bg-black absolute mt-[-32px] ml-10 p-1 w-[60px] rounded-md font-mono flex">
                    <button className="mr-2 h-5 w-5 flex justify-center items-center hover:text-[12px]" onClick={()=>handleRemoveItem(item,idx)}>-</button>
                    <h1 className="font-bold h-5 w-5 text-center flex justify-center items-center text-white p-1 hover:text-[12px]">{itemCounts[item.card.info.name] || 0}</h1>
                    <button className="ml-2 h-5 w-5 flex justify-center items-center hover:text-[12px] p-1" onClick={()=>handleAddItem(item,idx)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    }
    </div>
  );
}