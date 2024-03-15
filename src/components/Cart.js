import { useDispatch, useSelector } from "react-redux"
import { CARD_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";


export default function Cart() {
    const cartItems = useSelector((state)=>state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    
    const handleClearCart = ()=>{
       dispatch(clearCart());
    }
    const handleRemoveItem = (name)=>{
        dispatch(removeItem(name));
    }

  return (
    <div className="main-div w-3/12 m-auto">
        <h1 className="font-bold text-4xl text-center mb-2 mt-2 border-b-2 border-b-slate-300">Cart</h1>
       {cartItems.length > 0 && <button className="bg-black text-white p-2 m-2 rounded-md ml-44 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>} 
        {cartItems.length === 0 ? <h1 className="font-bold">Your Cart Is Empty... <br /> <p className="font-medium">Please add items to your cart.</p></h1> : cartItems.map((item,idx)=>{
            return <div className="w-12/12 ml-2 flex justify-between mb-5" key={idx}>
                <div>
                    <h1 className="font-semibold text-[18px]">
                        {item.card.info.name}
                    </h1>
                    <p className="font-semibold text-[16px] mb-4">
                        ₹
                        {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </p>
                </div>
                    <div>
                        <img
                        className="rounded-lg  h-[80px] w-[80px] object-cover "
                        src={CARD_URL + item.card.info.imageId}
                        alt="MenuItems-Img"/>
                        <button className="bg-green-600 text-white rounded-md p-1 mt-2 ml-2" onClick={()=>handleRemoveItem(item.card.info.name)}>Remove</button>
                    </div>
            </div>
            
            })
        }
      
    </div>
  )
}


