import { Link } from "react-router-dom"
const Features = ({cards}) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-2">ROOF PARTY POLAROID</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Categories</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            cards?.map((item,index) => {
                                return (
                                    <Link to={`/categories/${item}`} key={index} className="p-4 md:w-1/3 cursor-pointer">
                                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{item || 'Example Cards'}</h2>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                                <a className="mt-3 text-blue-500 inline-flex items-center">Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
