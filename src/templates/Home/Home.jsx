import Navbar from '../../components/Navbar/Navbar';
import ShopCategorie from '../../components/ShopCategorie/ShopCategorie';
import Showcase from '../../components/Showcase/Showcase';
import './home.css';
import show1 from '../../imgs/index5.jpg'
import Collections from '../../components/Collections/Collections';
import Footer from '../../components/Footer/Footer';
import Wellcome from '../../components/Wellcome/Wellcome';
import Prods from '../../components/prods/Prods';


function Home() {

  return (
    <div className="App">
      <Navbar/>
      <ShopCategorie/>
      <Showcase img={show1} title={"FEEL THE SPYRAL."} content={"allow yourself to sink into the spiral"} />
      <Prods/>
      <Wellcome/>
      <Collections/>
      
      <Footer/>
    
    </div>
  );
}

export default Home;
