import Titretext from "../../Accueil/Titretext";
import Menucontainer from "../../Accueil/Menu/MenuContainer/Menucontainer";
import Articletextbtn from "../../Accueil/ArticleTextBtn";
import Article3textbtn from "../../Accueil/Article3TextBtn";
import '../lieu.css';
import Navbar from '../../navbar/navbar';



function Lieu() {
    return (
      <div className="contenu">
        <Navbar />
        <div className='article-1' id="article-1-lieu">
          <Titretext titre="Lieu de compétition" text='Lorem ipsum dolor sit amet, consectetur elit. Cras varius sollicitudin lobortis.'/>
          <Menucontainer />
        </div>
  
        <div className='article-2'>
          <div id='div-gauche-lieu'>
            <Articletextbtn titre='Le stade Roland Garros' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. ' textp2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. '/>
            
            <div id='rolandgarros'></div>

          </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.</p>
            <div id="stade-roland"></div>
        </div>
         
        <div className='article-3'>
          <Article3textbtn titre='Où est-il situé ? '/>
          <ul>
              <li><span>Département</span> : 75</li>
              <li><span>Ville</span> : Paris 16e</li>
              <li><span>Distance du Village olympique et paralympique</span> : 12km au sud-ouest</li>
              <li><span>Accès</span> :  bus, métro lignes 9 et 10, stations Vélib’.</li>
              <li><span>Sites des Jeux à proximité</span> : Parc des Princes, Arena Paris Sud 1, 4 et 6, Stade Tour Eiffel, Esplanade des Invalides, Pont d’Iéna, Arena Champ-de-Mars.</li>
              <li><span>Sites touristiques à proximité</span> :  Tour Eiffel, Invalides, Bois de Boulogne, Fondation Louis Vuitton, Jardin d’acclimatation.</li>
          </ul>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.640940207198!2d2.251347651407861!3d48.84598720943205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ac786411f5f%3A0x4996a7bd2697a811!2sStade%20Roland%20Garros%2C%20Court%20Simonne%20Mathieu%2C%202%20Av.%20Gordon%20Bennett%2C%2075016%20Paris!5e0!3m2!1sfr!2sfr!4v1648310042553!5m2!1sfr!2sfr"
              width="800"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
        
      </div>
    );
  }
export default Lieu;