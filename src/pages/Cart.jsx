import { useSelector,useDispatch } from "react-redux"
import Pricecard from "./price"
import Header from "../components/Header"
import { removeItemFromCart,calculateTotalPrice } from "../redux/reducer/Cart"
function Cart(){

const items = useSelector ((state) => state.cart.items)   

const dispatch= useDispatch()
const handleremove= (id) =>{
    dispatch(removeItemFromCart(id))
    dispatch(calculateTotalPrice())
 
}

return   items.length === 0 ? <p className="text-4xl text-center mt-28 font-bold">the cart is empty</p> : <div>
 
<div className=" justify-center"> 
    <div>
 {

items.map((data) => {
return <div className=" w-[200px] ml-8 sm:ml-[180px] sm:w-[600px] sm:flex gap-4 items-center p-8 my-4 rounded border-4 border-x-green-200">
<img className="w-[120px]"  src={data.image} />
<div>
<h1 className="font-bold my-2">{data.title}</h1>
<h1 className="font-bold"> price:${data.price}</h1>
</div>
<button onClick={()=>handleremove(data)} className=" ml-28 font-bold">X</button>
</div>


})
}
</div>
</div>
<Pricecard/>
</div>
}
export default Cart