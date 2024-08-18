import { addItems } from "../utils/cartSLice";
import {CDN_URL} from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList=({items})=>{
  // console.log(items);
  const dispatch=useDispatch();
  
  const handleClick=(item)=>{
    dispatch(addItems(item));
  }
   
  return (
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-semibold text-sm cursor-pointer">
                  {item.card.info.name}
                </span>
                <span className="text-sm">
                  {" "}
                  - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice / 100}.00
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 rounded-lg relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="Customisable"
                className="rounded-lg"
              ></img>
              <div className="absolute bottom-0 right-0">
                <button className="w-11 bg-yellow-400 text-white border-2 border-gray-500 hover:bg-slate-500 rounded-md" 
                onClick={()=>handleClick(item)}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
export default ItemList;