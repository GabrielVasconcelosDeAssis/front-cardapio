import NavBar from "./NavBar";

const Lojas = () => {
    const simulaJsonLojas = [{
        nome: "Loja 1",
        endereco: "Rua:" + " Farias Brito, 10",
        telefone: "9999-9999" 
        },
        {
        nome: "Loja 2",
        endereco: "Rua:" + " Instituto Atlântico, 10",
        telefone: "9999-9999" 
        }]
return(
<>
    <NavBar />
    <article>
            <section className="text-center justify-flex p-5">
            {simulaJsonLojas.map((l, index) => (
                <div key={index}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
                        {l.nome}
                    </h1>

                    <p className="text-base md:text-base lg:text-2xl p-2">
                        {l.endereco}
                    </p>

                    <p className="text-base md:text-sm">
                        {l.telefone}
                    </p>
                </div>
            ))}
            </section>
    </article>
</>
);
}

export default Lojas;