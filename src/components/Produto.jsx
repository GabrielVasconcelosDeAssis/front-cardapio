import Button from "./Button";
const Produto = ({ typeProd, nameProd, imgProd, descImg, descProd }) => {
  return (
    <>
    <div className={"p-6 m-1 text-center border-4 border-black-500 rounded-xl font-semibold block"}>
      <h1 className={"p-2"}>{typeProd}: {nameProd}</h1>
      <img className={"p-5"} src={imgProd} alt={descImg} />
      <p className={"p-2"}>{descProd}</p>
      <Button 
      color="green"
      text="Comprar"
      />
      </div>
    </>
  );
};

export default Produto;