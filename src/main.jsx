import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import './index.css'

import ProductApi from './components/ProductApi'
import Store from "./redux/store/store"
import { Provider } from 'react-redux'
// import Quranlist from './components/QuranList'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const storePersist= persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersistGate persistor={storePersist} >

<Provider store={Store}>
<BrowserRouter>
<App/>
</BrowserRouter>


</Provider>
    </PersistGate>

 
)
