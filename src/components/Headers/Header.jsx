import { Link } from "react-router-dom"

const navigation = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

const Header = () => {

    return (
        <div>
            <header className="body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex title-font font-medium items-center cursor-pointer text-slate-700 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">OnlineStore</span>
                    </Link>
                    <nav className=" text-slate-500 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {
                            navigation.map((navLink, idnex) => {
                                return(
                                    <Link to={navLink.path} key={idnex} className="mr-5 hover:text-slate-800">{navLink.name}</Link>
                                )
                            })
                        }
                    </nav>
                    <button className="text-slate-100 inline-flex items-center bg-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
