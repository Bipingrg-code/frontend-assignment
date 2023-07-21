import { useState, useEffect } from "react"
import Features from "../../components/Features/Features"
import Hero from "../../components/Heros/Hero"
import Products from "../../components/Products/Products"
import Stats from "../../components/Stats/Stats"

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
      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div>Loading items..!</div>
      }
      <Features />
      <Stats />
    </>
  )
}

export default Home
