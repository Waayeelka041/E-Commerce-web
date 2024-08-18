import { Route,Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"

function App(){
    return (
        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default App;
