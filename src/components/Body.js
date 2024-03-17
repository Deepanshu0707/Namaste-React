import { Link } from "react-router-dom";
import ResturantCard, { promotedCard } from "./ResturantCard";
import Shimmer from "./Shimmer.js";
import useStatus from "../utils/useStatus.js";
import useFetchAllRestaurant from "../utils/useFetchAllRestaurant.js";
import UserContext from "../utils/UserContext.js";

import { useState, useEffect, useContext } from "react";

const Body = () => {
  // const [toggleBtn, setToggleBtn] = useState(false);
  // const [resList, setResList] = useState([]);
  const [copyResList, setCopyResList] = useState([]); //For putting Changes we use copyResList instead of orginal resList//
  const [resSearch, setResSearch] = useState("");

  const { resList } = useFetchAllRestaurant();

  const {loginUser, setUserName} = useContext(UserContext);  
  useEffect(() => {
   if(resList && resList.length > 0){
      setCopyResList(resList);
   }
  }, [resList]);


  /* High Order Component Is Used */
  const ResturantCardPromoted = promotedCard(ResturantCard);

  const status = useStatus(); //Custom Hook//
  

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

  // useEffect(() => {
  //  if(resList.length > 0){
  //     setCopyResList(resList);
  //   }
  // }, [resList]);

  //Fecthing All Restaurants //
  const fecthAllRes = () => {
    setCopyResList(resList);
  };

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

  if(resList.length === 0) {
    return <Shimmer />;
  }

  //Online Offline Statement //
  if (status === false)
    return (
      <h1>
        OOPS! Something Went Wrong... Please Check Your Internet Connection...
      </h1>
    );

    

  return (
    <div className="body">
      <div className="filter flex mt-2">
        <div className="search-div ml-6">
          <input
            type="text"
            value={resSearch}
            onChange={(e) => {
              setResSearch(e.target.value);
            }}
            className=" border border-solid border-black rounded-md mx-1 mt-2 px-2 py-1 font-thin "
          />
          <button
            onClick={filterRes}
            className=" px-4 py-[5px] bg-red-300 mx-1 rounded-md hover:bg-red-400"
          >
            Submit
          </button>
        </div>
        <div className="all-res-div flex">
          <button
            className=" bg-orange-200 ml-2 rounded-md px-3 mt-2 hover:bg-orange-300"
            onClick={fecthAllRes}
          >
            All Restaurants
          </button>
        </div>
        <div className="top-rated-div flex">
          <button
            className=" bg-orange-200 ml-4 rounded-md px-3 mt-2 hover:bg-orange-300 "
            onClick={filterFunc}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="top-rated-div flex">
         <input className="ml-4 text-black border border-solid border-x-violet-300 p-2" type="text" onChange={(e)=>setUserName(e.target.value)} value={loginUser}/>
         
            <h1 className="font-bold ml-9 mt-2">{loginUser}</h1>
        </div>
      </div>
      <div className="resturant-container flex flex-wrap gap-10 ml-8 mt-6 mb-5">
        {copyResList.map((item, index) => {
          return (
            <Link
              key={item.info.id}
              to={`/restaurant/${item.info.id}`}
              className="link"
            >
              {item.info.avgRating < 4.1 ? (
                <ResturantCardPromoted resData={item} />
              ) : (
                <ResturantCard resData={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;