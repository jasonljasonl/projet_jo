import Titretext from "../../Accueil/Titretext";
import Menucontainer from "../../Accueil/Menu/MenuContainer/Menucontainer";
import Articletextbtn from "../../Accueil/ArticleTextBtn";
import Article3textbtn from "../../Accueil/Article3TextBtn";
import Histoiretextimg from "../Histoire-text-img";
import Button from 'react-bootstrap/Button';
import Navbar from '../../navbar/navbar';
import {Link} from 'react-router-dom';

function Histoire() {
    return (
      <div className="contenu">
        <Navbar />
        <div className='article-1' id="article-1-histoire">
          <Titretext titre="L'histoire de la boxe" text='Lorem ipsum dolor sit amet, consectetur elit. Cras varius sollicitudin lobortis.'/>
          <Menucontainer />
        </div>
  
        <div className='article-2'>
          <Articletextbtn titre='Les origines' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.'/>
          <Histoiretextimg />
          <div id="gant-ancien"></div>
        </div>
         
        <div className='article-3'>
          <Article3textbtn titre='Les jeux Olympiques' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.' />
          <Link to='./accueil'><Button id='btntext'>Voir les règles</Button></Link>
          <div id="logo-jo"></div>
        </div>
        
      </div>
    );
  }
export default Histoire;