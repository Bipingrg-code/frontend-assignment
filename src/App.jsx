import { Routes, Route} from "react-router-dom"
import Header from "./components/Headers/Header"
import Home from "./modules/Home/Home"
import Footer from "./components/Footer/Footer"
import Product from "./modules/Product/Product"
import Products from "./components/Products/Products"
import Stats from "./components/Stats/Stats"


const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/stats" element={<Stats />}/>
        <Route path="/products/:id" element={<Product />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
