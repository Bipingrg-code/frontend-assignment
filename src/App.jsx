import { Routes, Route} from "react-router-dom"
import Header from "./components/Headers/Header"
import Home from "./modules/Home/Home"
import Footer from "./components/Footer/Footer"
import Product from "./modules/Product/Product"
import Products from "./modules/Products/Products"
import CategoryProducts from "./modules/CategoryProducts/CategoryProducts"



const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />}/>
        <Route path="*" element={<div>404 Not Found Page</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
