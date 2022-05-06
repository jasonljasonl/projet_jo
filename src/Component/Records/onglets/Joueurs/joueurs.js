import NomJoueurs from "./nomJoueurs";


const Joueurs = () => {
    return(
        <div className="ongletJoueurs">
            <div id='titre-joueurs'>
                <h2>Hall of Fame</h2>
            </div>
            <div id='lesJoueurs'>
                <div id='jackie'>
                    <NomJoueurs NomJoueurs='Jackie Fields'/>
                </div>
            </div>
        </div>
    )
}

export default Joueurs;