import styles from "../Style.css"
import React from "react";
import { lazy,Suspense,useContext,useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Error from "./components/Error.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


//Chunking
//Code Splitting
//Lazy loading
//Dynamic bundling
//Dynamic import
//On demand loading

const Grocery=lazy(()=>import("./components/Grocery.js"));



const Applayout=()=>{
  const [UserName, setUserName] = useState();

  useEffect(() => {
    //Make an API call
    const data = {
      loggedInUser: "Virat Kohli",
    };
    setUserName(data.loggedInUser);
  }, []);
  return (
    // In UserContext, we are sending our updated loggedIN User's name to every component of our app
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: UserName, setUserName }}>
        <div className="app bg-transparent text-black">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
         path:"/grocery",
         element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense> 
      },
      {
         path:"/restaurant/:resId",
         element:<RestaurantMenu/>
      },
      {
         path:"/cart",
         element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

// const Bfn=(props)=>{
//    const {data}=props;
//    return (
//     <div>
//         <h1>data.name</h1>
//     </div>
//    )
// }
// const resO={name:"chakri"};

// const Afn=()=>{
//     return(
//         <div>
//             <Bfn data={resO}/>
//         </div>
//     )
// }
// const obj = {
//   infor:{
//   id: "42145",
//   name: "Burger King",
//   cloudinaryImageId:
//     "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42145.JPG",
//   locality: "L B Nagar",
//   areaName: "Kothapet & Dilsukhnagar",
//   costForTwo: "₹350 for two",
// }
// };

// const a=obj?.infor;
// const {id,name}=a;
// console.log(id,name);