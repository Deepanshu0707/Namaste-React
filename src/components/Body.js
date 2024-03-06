import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer.js";
import useStatus from "../utils/useStatus.js";
import useFetchAllRestaurant from "../utils/useFetchAllRestaurant.js";


import { useState, useEffect } from "react";

  const Body = () => {
  // const [toggleBtn, setToggleBtn] = useState(false);
  // const [resList, setResList] = useState([]);
  const [copyResList,setCopyResList] = useState([]);//For putting Changes we use copyResList instead of orginal resList// 
  const [resSearch, setResSearch] = useState("");

  const status = useStatus();  //Custom Hook//
  const {resList} = useFetchAllRestaurant();

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const parseData = await data.json();
  //   const Data =
  //     parseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants;
  //   setResList(Data);
  //   setCopyResList(Data);
  // };

   //After Body Component Render useEffect automatically run//

  useEffect(() => {
   if(resList.length > 0){
    setCopyResList(resList);
   }
  },[resList]);


  //Fecthing All Restaurants // 
  const fecthAllRes = ()=>{
    setCopyResList(resList);
  }


 //Filter Top Rated Resturants// 
  const filterFunc = () => {
      let filterData = resList.filter((item) => item.info.avgRating > 4.2);
      setCopyResList(filterData);
  };

 //Filter According To Search Bar///
  const filterRes = () => {
    const filter = resList.filter((res) =>
    res.info.name.toLowerCase().includes(resSearch.toLowerCase())
    );
    setCopyResList(filter);
}; 
    //Online Offline Statement //
    if(status === false) return <h1>OOPS! Something Went Wrong... Please Check Your Internet Connection...</h1>

  return (
    <div className="body">
      <div className="filter">
        <div className="search-div">
          <input
            type="text"
            value={resSearch}
            onChange={(e) => {
              setResSearch(e.target.value);
            }}
          />
          <button onClick={filterRes}>Submit</button>
        </div>
        <div className="all-res-div">
          <button className="all-res" onClick={fecthAllRes}>
            All Restaurants
          </button>
        </div>
        <div className="top-rated-div">
          <button className="top-rated" onClick={filterFunc}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="resturant-container">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          copyResList.map((item, index) => {
            return <Link key={item.info.id} to={`/restaurant/${item.info.id}`} className="link"> <ResturantCard  resData={item} /> </Link>;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
