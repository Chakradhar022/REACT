import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSLice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(clearItems());
        console.log(cartItems);
    }
    return(
       <div className="p-3 py-2 text-center">
          <h1 className="font-bold text-2xl">Cart</h1>
          <button className="bg-black text-white rounded-md w-auto" onClick={()=>{handleClear()}}>Clear Cart</button>
          <div className="w-6/12 m-auto">
          <ItemList items={cartItems}/>
          {(cartItems.length===0) && <h1>Your cart is empty, Please add some items to the cart</h1>}
         </div>
       </div>
    )
}
export default Cart;