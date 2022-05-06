import Button from 'react-bootstrap/Button';
import './css/Titretext.css';

const Titretext = () => {
    return (
        <div className="contenu-intro">
            <div className="texte">
                <h1>Paris 2024</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur elit. Cras varius sollicitudin dolor sit lobortis.</h2>
                <Button href='./accueil' id='decouvrir'>Découvrir</Button>
            </div>
        </div>
    )
}
export default Titretext;