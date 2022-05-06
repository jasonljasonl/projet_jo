import Titretext from "../../Accueil/Titretext";
import Menucontainer from "../../Accueil/Menu/MenuContainer/Menucontainer";
import Navbar from "../../navbar/navbar";
import '../records.css';
import Joueurs from "../onglets/Joueurs/joueurs";


function Records() {
    return (
      <div className="contenu">
        <Navbar />
        <div className='article-1' id='article-1-records'>
          <Titretext titre="Les records" text='Lorem ipsum dolor sit amet, consectetur elit. Cras varius sollicitudin lobortis.'/>
          <Menucontainer />
        </div>
  
        <div className='article-2'>
          <Joueurs />



        </div>
         
        <div className='article-3'>
          
        </div>
        
      </div>
    );
  }
  

export default Records;