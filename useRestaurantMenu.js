import { MENU_API,MENU_API_END } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurantMenu=(resId)=>{
   const [restInfo,setrestInfo]=useState(null);

   useEffect(()=>{
    fetchdata();
   },[]);

   const fetchdata = async () => {
     const data = await fetch(MENU_API + resId + MENU_API_END);
     const json = await data.json();
    //  console.log(json);
     setrestInfo(json.data);
   };

   return restInfo;
}
export default useRestaurantMenu;