import { useEffect, useState } from "react"


export default function useStatus() {
    const [onlineStatus,setOnlineStatus] = useState(true);

  /*  useEffect basically help us to load this event listener one time and then this event listener will do there work according to online and offline   */
     useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])
 
    return onlineStatus
}
