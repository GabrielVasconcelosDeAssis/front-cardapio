import Button from "../components/Button"
import Produto from "../components/Produto";
import calabresaImg from '../assets/calabresa.png';
import lomboImg from '../assets/lombo.png';
import milhoImg from '../assets/milho.png';
import mussarelaImg from '../assets/mussarela.png';
import napolitanaImg from '../assets/napolitana.png';
import portuguesaImg from '../assets/portuguesa.png';
import NavBar from "./NavBar";

const Cardapio = () => {  
    let SimulaProdutosJson = [{
    typeProd: "Pizza",
    nameProd: "Calabresa",
    imgProd: calabresaImg,
    descImg: "Pizza de calabresa",
    descProd: "Pizza deliciosa de calabresa",
    precoProd: "10,00" + " R$"
    },
  {
    typeProd: "Pizza",
    nameProd: "Lombo",
    imgProd: lomboImg,
    descImg: "Pizza de lombo",
    descProd: "Pizza deliciosa de lombo",
    precoProd: "10,00" + " RS"
  },
  {
    typeProd:"Pizza",
    nameProd:"Milho",
    imgProd: milhoImg,
    descImg: "Pizza de milho",
    descProd: "Pizza deliciosa de milho",
    precoProd: "10,00" + " RS"
  },  
    {
    typeProd:"Pizza",
    nameProd:"Mussarela",
    imgProd: mussarelaImg,
    descImg: "Pizza de mussarela",
    descProd: "Pizza deliciosa de mussarela",
    precoProd: "10,00" + " RS"
  },
      {
    typeProd:"Pizza",
    nameProd:"Napolitana",
    imgProd: napolitanaImg,
    descImg: "Pizza napolitana",
    descProd: "Pizza napolitana deliciosa",
    precoProd: "10,00" + " RS"
  },  
        {
    typeProd:"Pizza",
    nameProd:"Portuguesa",
    imgProd: portuguesaImg,
    descImg: "Pizza portuguesa",
    descProd: "Pizza portuguesa deliciosa",
    precoProd: "10,00" + " RS"
  },  
  ]
  
    return(
    <>
    <NavBar />

    <section className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {SimulaProdutosJson.map((produto, index) => (
    <Produto className="w-full md:w-1/4"  
    typeProd={produto.typeProd}
    nameProd={produto.nameProd}
    imgProd={produto.imgProd}
    descImg={produto.descImg}
    descProd={produto.descProd}
    precoProd={produto.precoProd}
     />
))}
    </section>
    </>
    );
}

export default Cardapio;