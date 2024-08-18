import { useDispatch } from "react-redux"
import {addItemToCart,calculateTotalPrice} from "../redux/reducer/Cart"
import {toast,Toaster} from "react-hot-toast"


function Product( {items}){
 
const dispatch= useDispatch()

const handleAddToCart = () => {
   dispatch( addItemToCart(items))
   dispatch(calculateTotalPrice())

      toast.success("Item added to cart")
     
  
  
}


return(
    <div className=" w-[300px] border-4 rounded  m-3 p-4 font-Font1 "> 
<img className="w-[100px]" src={items.image} />
   <h1 className="font-semibold text-xl"> {items.title.substring(0,20)+"..."} </h1>
   <div className=" flex justify-between items-center">
<h1 className=" font-bold  text-3xl"> ${items.price} </h1>
<button  onClick={ handleAddToCart }  className="bg-primarycolors rounded-full w-[40px] h-[40px] text-center text-thirdcolors px-3 py-1 text-3xl">+</button>
</div>
<Toaster/>
   </div>
   
) 
}
export default Product