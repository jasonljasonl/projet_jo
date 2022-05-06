import './navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="navbar-site">
            <div class="navnav">
                <ul>
                    <li><Link to='./accueil'>Accueil</Link></li>
                    <li><Link to='./histoire'>L'histoire</Link></li>
                    <li><Link to='./lieu'>Le lieu</Link></li>
                    <li><Link to='./records'>Les records</Link></li>
                    <li><Link to='./boutique'>La boutique</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;