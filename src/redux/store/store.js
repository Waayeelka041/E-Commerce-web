import { configureStore } from "@reduxjs/toolkit";
import { addItemToCart } from "../reducer/Cart";
import Cartslice from "../reducer/Cart"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const storageconfig ={
    key:"root",
    storage
}

const allReducer = combineReducers({
    cart:Cartslice
})
const persistFunction = persistReducer(storageconfig,allReducer)

const  Store = configureStore({
    reducer: persistFunction
  
})
export default Store