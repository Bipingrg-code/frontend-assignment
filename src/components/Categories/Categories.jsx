import { useState, useEffect } from "react"
import Features from "../Features/Features"

const Categories = () => {
    const [category, setCategory] = useState([])

    //fetchCategory

    useEffect(() => {
        const fetchCategory = async () => {
            const baseUrl = import.meta.env.VITE_APP_URL
            const data = await fetch(`${baseUrl}/categories`).then(res => res.json());
            console.log(data, 'data');
            setCategory(data);
        }
        fetchCategory()
    }, [])
    if (category.length === 0) {
        return <div>Loading..!</div>
    }
    return (
        <div>
            <Features cards={category} />
         
        </div>
    )
}

export default Categories
