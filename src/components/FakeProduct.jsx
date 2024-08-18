
function FakeProduct({items}){
return (
    <div className="w-[350px] border-2 border-black p-4 m-3 font-bold text-center justify-center ">
        <img  className="h-[150px]"  src= {items.image} />
        <div className=" flex justify-between">

        <h1> {items.title} </h1>
        <h1> {items.id} </h1>
        </div>
        <h1 className="bg-blue-600 text-white">price: ${items.price} </h1>
        <h1 className="bg-blue-600 text-white">Rating: {items.rating.rate} </h1>
        <div className="flex gap-4 mt-2">
            <button className="bg-orange-500 px-2 rounded-md  ">Add to Cart</button>
            <button className="bg-orange-500 px-2 rounded-md  ">Buy Now</button>
            <button className="bg-orange-500 px-2 rounded-md  ">Share</button>
          
        </div>
    </div>
)
}
export default FakeProduct