import DataFetching from '../../DataFetching';


import '../css/Accueil.css';
import Titretext from '../Titretext';
import Menucontainer from '../Menu/MenuContainer/Menucontainer';
import Articletextbtn from '../ArticleTextBtn';
import Article3TextBtnAccueil from '../Article3TextBtnAccueil';
import Button from 'react-bootstrap/Button';
import Navbar from '../../navbar/navbar';
import {Link} from 'react-router-dom';


import rolandGarosImage from '../../../Images/roland-garros-jour.jpg'



function Accueil() {
  return (
    <div className="contenu">
      <Navbar />
      
      <div className='article-1'>
        <Titretext titre='Paris se prépare pour 2024 !' text='Lorem ipsum dolor sit amet, consectetur elit. Cras varius sollicitudin lobortis.'/>
        <Menucontainer />
      </div>

      <div className='article-2Accueil'>
        <div id='article-2-gauche'>
          <Articletextbtn titre={<DataFetching />} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.'/>
          <Link to='./lieu'><Button id='btntext'>Voir le lieu</Button></Link>
          
        </div>

        <div id="imageAccueilArticle2">
          <img src={rolandGarosImage} alt='Stade Roland Garros' />
        </div>
      </div>
 

      <div className='article-3Accueil FadeGauche'>
        <div id='article-3-regle'>
          <Article3TextBtnAccueil titre='Quelles sont les règles ?' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.'/>
          <Link to='./histoire'><Button id='btntext'>Voir l'histoire</Button></Link>
        </div>
        <div id='videoYtb'>
          <iframe src="https://www.youtube.com/embed/LJYNJZ_qDy4" />
        </div>
      </div>

      <div className='article-4'>
        <h4>Les règles de la boxe Olympique en vidéo</h4>
        <div id='videoYtb-2'>
          <iframe src="https://www.youtube.com/embed/LJYNJZ_qDy4"></iframe>
        </div>
      </div>
    </div>
  );
}

/**********************ANIMATION SCROLL *********************/
function FadeGauche() {
  var scrolls = document.querySelectorAll(".FadeGauche");
  for (var i = 0; i < scrolls.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = scrolls[i].getBoundingClientRect().top;
    var elementVisible = 300;

    if (elementTop < windowHeight - elementVisible) {
      scrolls[i].classList.add("active");
    } else {
      scrolls[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", FadeGauche);
/*******************ANIMATION SCROLL FIN *********************/



export default Accueil;