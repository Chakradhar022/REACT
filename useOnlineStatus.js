import { useState,useEffect } from "react";

const OnlineStatus=()=>{
    
    const [OnlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
      window.addEventListener("online",()=>{
        setOnlineStatus(true);
      });
      window.addEventListener("offline",()=>{
        setOnlineStatus(false);
      })
    },[]);

    return OnlineStatus;
}
export default OnlineStatus;