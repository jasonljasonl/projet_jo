import React, { Component } from 'react';
import './Css/Histoire.css';
import image1 from '../../Images/boxe-ancienne-2.jpg';
import image2 from '../../Images/pugilat1.jpg';
import image3 from '../../Images/pugilat.jpg';

class Histoiretextimg extends Component {

    render() { return (
        <div>
            <div className='images-triple'>
                <div id='image1'><img src={image1} alt='boxe ancienne dessin'/></div>
                <div id='image2'><img src={image2} alt='Pugilat dessin 2'/></div>
                <div id='image3'><img src={image3} alt='Statue pugiliste'/></div>
            </div><br />
            <div>
                <p id='histoire-texte'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec. <br /><br />
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et erat eu neque tincidunt bibendum a sit amet arcu. Pellentesque mi ipsum, venenatis sit amet elementum ac, laoreet eget eros. Nullam ac nunc quis diam feugiat ultrices quis ac nunc. Vivamus ut porta ipsum, id sodales eros. Vestibulum sapien nibh, semper at aliquam id, ultrices vitae lectus. Nulla faucibus lectus nunc, sit amet maximus nunc pulvinar nec.</p>
            </div>
            

        </div>

    )}
}

export default Histoiretextimg;