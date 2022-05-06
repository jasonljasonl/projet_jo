import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

function DataFetching() {
    const [textes, setTextes] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost/projet_jo/projet_jo_api.php')
      .then(res => {
        console.log(res)
        setTextes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    return (
      <div>
        
          {
            textes.map(texte => <h1 key={texte.id}>{texte.titre}</h1>)
          }
        
      </div>
    )
  }

  export default DataFetching;