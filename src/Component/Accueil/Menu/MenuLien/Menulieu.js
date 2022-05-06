import './Menulieu.css';
import {Link} from 'react-router-dom';


const Menulieu = () => {
    return(
        <div className="ContenuMenu">
            <Link to='./lieu'>
                <div className="ImgMenuLieu"></div>
                <h5>Le lieu</h5>
            </Link>
        </div>
    )
}

export default Menulieu;