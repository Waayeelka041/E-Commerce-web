import axios from "axios"
import FakeProduct from "./FakeProduct";
import { useState,useEffect } from "react";


function FakeProductList(){
    const [item, setitem]= useState([])

    const getproduct= ()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setitem(response.data)
        }).catch((error)=>{
            console.log(error)
        })

    }

   useEffect(()=>{
    getproduct()
   })

    return  <div className="grid grid-cols-[350px_350px_350px] justify-center gap-6">
       
{
    item.map((product)=>{
        return <FakeProduct items={product} />
    })
}
        </div>
    
}
export default FakeProductList