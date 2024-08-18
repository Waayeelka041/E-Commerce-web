
function QuranApi({items}){
    return (
        <div className=" border-2 border-black p-4 m-3 font-bold text-center justify-center ">
           
            <div className=" flex justify-between">
    
            <h1> {items.name} </h1>
            <h1> {items.identifier} </h1>
            </div>
            
       
        </div>
    )
    }
    export default QuranApi