import { useState } from "react";
import { CARD_URL } from "../utils/constants";


export default function MenuCategory({category, categoryItems, setCategoryItemsIndex}) {
  
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
                <button className="text-lime-200 bg-black absolute mt-[-32px] ml-10 p-1 w-[60px] rounded-md font-mono">
                  ADD
                </button>
              </div>
            </div>
          );
        })}
      </div>
    }
    </div>
  );
}
