  import Button from "./Button";
  const Produto = ({ typeProd, nameProd, imgProd, descImg, descProd, precoProd }) => {
    return (
      <>
    <article className="p-6 m-1 text-center border-4 border-black rounded-xl font-semibold block">
        <h1 className={"p-2"}>{typeProd}: {nameProd}</h1>
        <img className={"p-5"} src={imgProd} alt={descImg} />
        <p className={"p-2"}>{descProd}</p>
        <h1 className={"p-2"}>{precoProd}</h1>
        <Button 
        color="green"
        text="Comprar"
        />
        </article>
      </>
    );
  };

  export default Produto;