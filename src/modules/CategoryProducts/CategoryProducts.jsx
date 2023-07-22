import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsCards from '../../components/ProductsCards/ProductsCards'

const CategoryProducts = () => {
    const { name } = useParams()
    console.log(name)
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl = import.meta.env.VITE_APP_URL
            const data = await fetch(`${baseUrl}/category/${name}`).then(res => res.json());
            //console.log(data);
            setProduct(data);
        }
        fetchProducts()
    }, [])
    if (product.length === 0) {
        return <div>Loading..!</div>
    }
    return (
        <div>
            <ProductsCards products={product} />
        </div>
    )
}

export default CategoryProducts
