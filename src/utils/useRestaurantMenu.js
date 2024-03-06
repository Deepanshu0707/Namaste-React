import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

export default function useRestaurantMenu(id) {
    
const [menuDetails,setMenuDetails] = useState(null);

  useEffect(()=>{
    fetchData();
  },[])
    const fetchData = async ()=>{
        const data = await fetch(MENU_URL + id);
        const json = await data.json();
        setMenuDetails(json);
    }
   
    return menuDetails
}
