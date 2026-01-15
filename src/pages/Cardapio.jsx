import Button from "../components/Button"
import Produto from "../components/Produto";
import calabresaImg from '../assets/calabresa.png';
import lomboImg from '../assets/lombo.png';
import milhoImg from '../assets/milho.png';
import mussarelaImg from '../assets/mussarela.png';
import napolitanaImg from '../assets/napolitana.png';
import portuguesaImg from '../assets/portuguesa.png';

const Cardapio = () => {    
    return(
    <>
    <div className="p-10 flex flex-col md:flex-row justify-around gap-1">
    <h1 className="p-12 text-center text-xl">Sobre</h1>
    <h1 className="p-12 text-center text-xl">Cardápio</h1>
    <h1 className="p-12 text-center text-xl">Lojas</h1>
    </div>
    <hr />    

    <div className="p-16 flex flex-col md:flex-row justify-between gap-10">
    <Produto 
    typeProd="Pizza"
    nameProd="Calabresa"
    imgProd={calabresaImg}
    descImg="Pizza de calabresa"
    descProd="Pizza deliciosa de calabresa"
  />
    <Produto 
    typeProd="Pizza"
    nameProd="Lombo"
    imgProd={lomboImg}
    descImg="Pizza de lombo"
    descProd="Pizza deliciosa de lombo"
  />
    <Produto 
    typeProd="Pizza"
    nameProd="Milho"
    imgProd={milhoImg}
    descImg="Pizza de milho"
    descProd="Pizza deliciosa de milho"
  />
    </div>
    </>
    );
}

export default Cardapio;