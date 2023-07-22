
import { useState, useEffect } from "react"
import Categories from "../../components/Categories/Categories.jsx"
import ProductsCards from "../../components/ProductsCards/ProductsCards.jsx"
const Products = () => {
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
        <div>
            <Categories />
            <ProductsCards products={products}/>
        </div>
    )
}

export default Products
