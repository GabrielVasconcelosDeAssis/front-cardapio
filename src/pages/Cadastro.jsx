import Button from "../components/Button";
import { Link } from "react-router-dom";

const Cadastro = () => {
    return (
        <>
            <div>
                <h1 className="text-center flex flex-col max-w-sm mx-auto p-10 text-4xl">Cadastro</h1>
                <div className="text-center flex flex-col gap-4 p-4 max-w-sm mx-auto ">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Usuário"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="text-center flex flex-col">
            <Link to="/cardapio">
                <Button
                    color="green"
                    text="Confirmar Cadastro"
                />
             </Link>
                <Link to="/">
                    <Button
                        color="yellow"
                        text="Tenho Conta"
                    />                
                </Link>
                </div>
            </div>
        </>
    )
}

export default Cadastro;