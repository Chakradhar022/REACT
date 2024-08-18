import { IMG_URL } from "../utils/constants"
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import appStore from "../utils/appStore";
import { useSelector } from "react-redux";


    const Header=()=>{
        var [btn,setbtn]=useState("LOGIN");
        const status=OnlineStatus();
        const {loggedInUser}=useContext(UserContext);

        const cartItems=useSelector((store)=>store.cart.items);
        console.log(cartItems)

        // const statusstyle={
        //     color : status?'green':'red',
        //     backgroundColor:status?'green':'red'
        // };
        
        return (
            <div className="flex justify-between bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg ">

                <div className="logo-container">
                <img className="w-[88px]" src={IMG_URL} />
                </div>
                <div className="items-center">
                    <ul className="flex justify-between p-4 m-4">
                        {/* <li style={statusstyle} className="status">{ status? "" :" "}</li> */}
                        <li className="px-4">{ status? "✅" :"🔴"}</li>
                        <li className="px-4"><Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/about">About</Link></li>
                        <li className="px-4"><Link to={"/contact"}>Contact</Link> </li>
                        <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                        <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                        <div className=" flex items-center justify-between">
                        <button className=" rounded-md items-center bg-red-500 " onClick={()=>{
                            btn==="LOGIN"?setbtn("LOGOUT"):setbtn("LOGIN")
                        }}> {btn}</button>
                        <li className="font-bold">{"    "+loggedInUser}</li>
                        </div>
                    </ul>
                </div>

            </div>
        )
    }
    export default Header;