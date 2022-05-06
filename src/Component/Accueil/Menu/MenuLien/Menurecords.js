import './Menurecords.css';
import {Link} from 'react-router-dom';


const Menurecords = () => {
    return(
        <div className="ContenuMenu">
            <Link to='./records'>
                <div className="ImgMenuRecords"></div>
                <h5>Les records</h5>
            </Link>
        </div>
    )
}

export default Menurecords;