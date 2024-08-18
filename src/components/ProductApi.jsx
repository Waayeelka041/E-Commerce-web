import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Product from "./Product"
import Header from "./Header"
import  ClipLoader  from "react-spinners/ClipLoader"
function ProductApi(){
const [product, setproduct]= useState([])
const [search, setsearch]= useState("")
const [loading, setloading]= useState(false)
const handleSearchChange = (e) => {
    setsearch(e.target.value)
}
const handleGetProducts = () =>{
    setloading(true)
    axios.get("https://fakestoreapi.in/api/products").then((response)=>{
setproduct(response.data.products)
setloading(false)
    }).catch((error)=>{
        console.log( error)
    })
}
    useEffect(()=>{
        handleGetProducts()
    },[])

    return   loading == true ? <ClipLoader loading={loading} className="ml-[700px] mt-[400px] text-8xl" />:  <div> 
  
        <Header   search={handleSearchChange}  />

        
             
             
             <div className="  grid sm:grid-cols-[300px_300px_300px_300px] gap-y-10 justify-center gap-x-5 mt-28">
        {
            product.filter((item)=>{
                return search.toLowerCase() == "" ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }).map((data)=>{
                return <Product items={data} />
            })
        }
 
    </div>
        
    
          
    </div>

}

export default ProductApi