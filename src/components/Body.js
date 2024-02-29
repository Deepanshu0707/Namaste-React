import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body = ()=>{
  const [toggleBtn,setToggleBtn] = useState(false);
  const [resList,setResList] = useState(resData);
  const filterFunc = ()=>{
    if(!toggleBtn){
      let filterData = resList.filter((item)=>item.info.avgRating > 4.2)
      setResList(filterData);
      setToggleBtn(true);
    }
    else{
      setToggleBtn(false);
      setResList(resData);
    }
  }
    return(
        <div className="body">
            <div className="filter">
              <button className="top-rated" onClick={filterFunc}>
              Top Rated Restaurants
              </button>
            </div>
            <div className="resturant-container">
              {resList.map((item,index)=>{
                return <ResturantCard key={item.info.id} resData={item} />
              })}
                
            </div>
        </div>
    )
}

export default Body;