import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer.js";

import { useState, useEffect } from "react";
const Body = () => {
  // const [toggleBtn, setToggleBtn] = useState(false);
  const [resList, setResList] = useState([]);
  const [copyResList,setCopyResList] = useState([]);
  const [resSearch, setResSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const parseData = await data.json();
    const Data =
      parseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(Data);
    setCopyResList(Data);
  };

  //After Body Component Render useEffect automatically run//
  useEffect(() => {
    fetchData();
  }, []);


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
          <button className="all-res" onClick={fetchData}>
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
            return <ResturantCard key={item.info.id} resData={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
