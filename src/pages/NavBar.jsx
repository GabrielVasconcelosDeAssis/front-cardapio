import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="p-10 flex flex-col md:flex-row justify-around gap-1">
                <h1 className="p-12 text-center text-xl">
                    <Link to={'/sobre'} className="hover:text-gray-300">Sobre</Link>
                </h1>
                <h1 className="p-12 text-center text-xl">
                    <Link to={'/cardapio'} className="hover:text-gray-500">Cardápio</Link>
                </h1>
                <h1 className="p-12 text-center text-xl">
                    <Link to={'/lojas'} className="hover:text-gray-300">Lojas</Link>
                </h1>
            </nav>
            <hr />
        </>
    )
}

export default NavBar;