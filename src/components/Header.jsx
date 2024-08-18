import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";


function Header( {search}){
 const [isOpen, setisOpen] =useState(false)
const handleOpen= ()=>{
    setisOpen(true)
 
}

 const numberOfItems = useSelector((state) => state.cart.items);

return (  <div className=" absolute top-0  w-[300px]">


       <div className="bg-primarycolors border-b-4  fixed  w-full font-Font1 border-secondarycolors pt-4 pb-2 px-12 flex justify-between  items-center">
       <h1 className="  font-bold text-4xl sm:text-4xl text-thirdcolors"> <span className="text-secondarycolors  sm:text-2xl ">e</span> Suuq</h1> 
      
       <ul style={{display: isOpen == true ? "block" : ""}}  className=" font-Font1 pb-10 hidden sm:flex gap-2 sm:gap-4 text-xl sm:text-2xl   text-secondarycolors">
        <li className="hover:text-thirdcolors" >Home</li>
        <li className="hover:text-thirdcolors">About</li>
        <li className="hover:text-thirdcolors">Contact</li>
       </ul>
<form >
    <input style={{display: isOpen == true ? "block" : "" }}  onChange={search} type="text" className="border-2 hidden mt-20 sm:mt-0 mr-10 w-[300px] sm:flex rounded-md pl-4 pr-10 py-2 focus:outline-none focus:border-secondarycolors" placeholder="Search..."/>

</form>

 <Link to="/Cart" >
 <i class="fa-solid fa-cart-shopping text-4xl text-thirdcolors hover:text-secondarycolors"> 
       <h1 className="text-white text-xl "> {numberOfItems.length} </h1> </i>
      
 </Link>
 <i  style={{display: isOpen == true ? "none" : " " }} onClick={handleOpen}  class="fa-solid fa-bars  sm:hidden  text-white text-4xl"></i>
    </div>
    </div>
)

}
export default Header