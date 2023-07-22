import { Link } from "react-router-dom"
const ProductsCards = ({ products = [] }) => {
    return (
        <div>
            <div className="flex flex-col text-center w-full">
                <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Our Products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Populer Products</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((items) => {
                                //console.log(items)
                                const {id, title, price, image, category, description, rating} = items
                                return (
                                    <Link to={`/products/${id}`} key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                            <p className="mt-1 text-md font-semibold">Rs.{price}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProductsCards
