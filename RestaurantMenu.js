import Shimmer from "./Shimmer";
import { useState,useContext } from 'react';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext.js";

const RestaurantMenu=()=>{

   const [showIndex,setshowIndex]=useState(null);

    const {resId}=useParams();
    const restInfo=useRestaurantMenu(resId);
      const {defaultUser}=useContext(UserContext);
      
      console.log(defaultUser)
   
    if(!restInfo)return (<Shimmer/>);



    
const categories= 
restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
     c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log(categories);

const {name,areaName, cuisines, costForTwoMessage}=restInfo?.cards[2]?.card?.card?.info;
return (
  <div className="text-center">
    <h1 className="m-5 font-bold text-2xl">{name.toUpperCase()}</h1>
    <h4 className="font-bold text-lg">{areaName}</h4>
    <h4 className="font-bold">
      {cuisines?.join(", ")} - {costForTwoMessage}
    </h4>
    {categories.map((category, index) => (
      // console.log(category);
      <RestaurantCategory
        key="category.card.card.title"
        showIndex={showIndex === index ? true : false}
        setshowIndex={() => setshowIndex(index)}
        //for toggling write toggleshowIndex(index)---const toggleshowIndex=(index)=>{setshowIndex(showIndex===index?null : index)}
        data={category.card.card}
        />
      ))}
  </div>
);
}

export default RestaurantMenu;





