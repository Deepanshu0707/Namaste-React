import { useEffect, useState } from "react"


export default function useFetchAllRestaurant() {
 
    const [resList, setResList] = useState([]);
   
    const fetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const parseData = await data.json();
          const Data =
                parseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResList(Data);
    }
    console.log("Render Empty Restaurant Value");

    useEffect(()=>{
        fetchData();
    },[])

 return  {
    resList: resList,
 } 

}
