import { useSelector } from "react-redux"

function Pricecard(){
    const price= useSelector((state)=> state.cart.totalprice)
    const number= useSelector((state)=> state.cart.items)
    return(
        <div className=" w-[140px]  sm:w-[330px] mt-5 p-4 rounded fixed sm:right-24 right-3 top-0 border-4 h-[200px] m-3 sm:mt-28">
<h1> Total items</h1>
<h1 className="font-bold"> {number.length} </h1>
<h1> Total items</h1>
<h1 className=" font-bold"> ${price} </h1>
<button className=" px-10 sm:px-28 bg-primarycolors text-thirdcolors sm:py-3 mt-4 rounded"> pay now</button>
        </div>
    )
}
export default Pricecard