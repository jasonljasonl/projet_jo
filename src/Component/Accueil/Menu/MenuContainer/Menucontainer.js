import Menuhistoire from "../MenuLien/Menuhistoire";
import Menulieu from "../MenuLien/Menulieu";
import Menurecords from "../MenuLien/Menurecords";
import Menuboutique from "../MenuLien/Menuboutique";

const Menucontainer = () => {
    return (
        <div className="Menucontainer">
            <h4>Découvrir</h4>
            <div className="LienDesMenus">
            <Menuhistoire /> 
            <Menulieu />
            <Menurecords />
            <Menuboutique />
            </div>
        </div>
    )
}
export default Menucontainer;