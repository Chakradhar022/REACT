import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
//sla means SERVICE LEVEL AGREEMENT which gives details like:
    //"deliveryTime": 30,  // Estimated delivery time in minutes
    // "minDeliveryTime": 25,  // Minimum possible delivery time in minutes
    // "maxDeliveryTime": 35,  // Maximum possible delivery time in minutes
    // "lastMileTravel": 5.2,  // Distance in kilometers for the delivery
    // "serviceability": "high",  // Serviceability level (e.g., high, medium, low)
    // "rainMode": "safe",  // Adjusted delivery considerations in rainy conditions
    // "longDistance": "not_long_distance",  // Indicates if it is a long-distance delivery
    // "preferentialService": false  // Indicates if it is a preferential (priority) service

//   
const RestaurantCards=(props)=>{
    const {resdata}=props;
    const {loggedInUser}=useContext(UserContext);
    const data=resdata?.info;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, id } = data;
    return (
        <div className="m-2 p-2 w-[220px] rounded-md bg-gray-200 hover:bg-gray-300 " >
            <img className="rounded-md h-40 w-60" src={CDN_URL+cloudinaryImageId}/>
           <h3 className="font-bold text-lg">{name}</h3>
           <h3>{id}</h3>
           
           <h4>{cuisines.join(", ")}</h4>
           
           <div className="flex items-center">
           <h4 className=" w-[45px] bg-green-600 rounded-md">{avgRating+"⭐"}</h4>
           <h4 className="m-[5px]">{resdata.info.sla.deliveryTime} minutes</h4>
           </div>
           <h4>{costForTwo}</h4>
           <h6>User:{loggedInUser}</h6>
        </div>
    );
}


export const withPromotedLabel=(RestaurantCards)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute w-[110px] items-center bg-black text-white rounded-md">Recommended</label>
                <RestaurantCards {...props}/>
            </div>
        )
    }
}
export default RestaurantCards;