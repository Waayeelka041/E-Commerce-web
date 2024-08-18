import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

import QuranApi from "./QuranApi"

function Quranlist(){

const [quran, setQuran]= useState([])

    const handleGetProducts = () =>{
        axios.get("https://api.alquran.cloud/v1/edition").then((response)=>{
    setQuran(response.data.data)
        }).catch((error)=>{
            console.log( error)
        })
    }
        useEffect(()=>{
            handleGetProducts()
        })

        
    return <div> 
     <div  className="grid grid-cols-[300px_300px_300px_300px] gap-y-10 gap-x-5 mt-10">
{
    quran.map((data)=>{
        return < QuranApi items={data} />
    })
}

</div>
</div>
}


export default Quranlist