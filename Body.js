import RestaurantCards,{ withPromotedLabel} from "./RestaurantCards";
import resList from "../utils/Data";
import { useState,useEffect,useContext } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{
  
  const [restList,setrestList]=useState([]);
  const [filteredRestList,setfilteredRestList]=useState([]);
  const [SearchBtn,setSearchBtn]=useState("");
  
  const RestCardRecommended=withPromotedLabel(RestaurantCards);

  const {loggedInUser, setUserName}=useContext(UserContext);

  useEffect(()=>{
    fetchData();
  },[]);
  
  const Status=OnlineStatus();
  
  if(!Status)return <h1>You are Offline, Check Your Internet Connection</h1>

    const fetchData=async()=>{
      // const data=await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );

      // const data=await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );

      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );

      const datajson=await data.json();
      // console.log(datajson);
      setrestList(datajson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestList(datajson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    //Conditional Rendering
    // if(restList.length===0){
    //   console.log(<Shimmer/>);
    //   return (<Shimmer/>);
    // }

    return restList.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter flex">
          <div className="Search m-2 p-2">
            <input
              type="text"
              className="Search-box border border-black focus:ring-2 focus:ring-blue-600"
              value={SearchBtn}
              onChange={(e) => {
                setSearchBtn(e.target.value);
              }}
            ></input>

            <button
              onClick={() => {
                const SearchedList = restList.filter((res) =>
                  res.info.name.toLowerCase().includes(SearchBtn.toLowerCase())
                );
                setfilteredRestList(SearchedList);
              }}
              className="Search-btn px-4 py-1 bg-green-400 m-2 rounded-lg"
            >
              Search
            </button>
          </div>

          <div className="m-2 p-2 flex items-center ">
            <button
              className="px-4 py-2 bg-sky-500 hover:bg-sky-700 rounded-lg"
              onClick={() => {
                const filteredList = restList.filter(
                  (res) => res.info.avgRating > 4
                );
                setfilteredRestList(filteredList);
              }}
            >
              Top Restaurants
            </button>
          </div>

          <div className="Search m-2 pt-[18px]">
            <label>UserName: </label>
            <input
              type="text"
              className="Search-box border border-black focus:ring-2 focus:ring-blue-600"
              value={loggedInUser}
              onChange={(e) => 
                setUserName(e.target.value)
              }
            />
          </div>
        </div>
        <div className=" flex flex-wrap">
          {filteredRestList.map((restaurant) => (
            // <RestaurantCards key={restaurant.id} resdata={restaurant} />
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
              className="RestCardLink"
            >
              {restaurant.info.avgRating >= 4.5 ? (
                <RestCardRecommended resdata={restaurant} />
              ) : (
                <RestaurantCards resdata={restaurant} />
              )}
            </Link>
          ))}
          ;
        </div>
      </div>
    );
}
export default Body;