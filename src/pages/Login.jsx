import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-center flex flex-col max-w-sm mx-auto p-10 text-4xl">Login</h1>
                <div className="text-center flex flex-col gap-4 p-4 max-w-sm mx-auto ">
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
                <div className="flex flex-col text-center p-1 md:flex-row justify-center items-center gap-4">
                    <Link to="/cardapio" className="w-full md:w-auto">
                        <Button
                            color="green"
                            text="Entrar"
                        />
                    </Link>

                    <div className="w-full md:w-auto">
                        <Link to="/cadastro" className="w-full md:w-auto">
                        <Button
                            color="blue"
                            text="Esqueci a senha"
                        /> 
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;