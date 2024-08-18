import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory=({data, showIndex, setshowIndex})=>{
    const handleClick=()=>{
      setshowIndex();
      //on clicking the div handleClick and setshowIndex will be called and in parent component this function is set to 
      //setshowIndex(index) callback, and now showIndex will be updated to the index
    }
    return (
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>{ showIndex ===false?"▼":"▲"}</span>
        </div>

        {/* {console.log(data.itemCards)} */}
       {showIndex && <ItemList items={data.itemCards} />}
      </div>
    );
}
export default RestaurantCategory;