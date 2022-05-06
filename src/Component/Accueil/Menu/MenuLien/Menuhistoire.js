import './Menuhistoire.css';
import {Link} from 'react-router-dom';


const Menuhistoire = () => {
    return(
        <div className="ContenuMenu">
            <Link to='./histoire'>
                <div className="ImgMenu"></div>
                <h5>L'histoire</h5>
            </Link>
        </div>
    )
}

export default Menuhistoire;