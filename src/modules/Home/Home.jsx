import { useState, useEffect } from "react"
import Hero from "../../components/Heros/Hero"
import ProductsCards from "../../components/ProductsCards/ProductsCards"
import Stats from "../../components/Stats/Stats"
import Products from "../Products/Products"
import Categories from "../../components/Categories/Categories"

const Home = () => {
  const [products, setProducts] = useState([])
  //featchProducts

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl = import.meta.env.VITE_APP_URL
      const data = await fetch(`${baseUrl}?limit=16`).then(res => res.json());
      //console.log(data);
      setProducts(data);
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Hero />
      <Categories />
      {
        products.length > 0 ?
        <ProductsCards products={products}/>
        :
        <div>Loading items..!</div>
      }
    
      <Stats />
    </>
  )
}

export default Home
