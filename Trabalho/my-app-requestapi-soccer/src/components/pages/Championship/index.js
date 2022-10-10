import { useEffect, useState } from "react";
import { fncGETAPICampeonato } from "../../scripts";

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
  },
  width: {
    width: "220px",
  }
}

function BrzlnChampionship() {

    /* Variável para armazenar response da API */
    const [campeonatoBrasileiro, setCampeonatoBrasileiro] = useState([]);

    useEffect(()=>{
      (async()=>{
        await fncGETAPICampeonato().then((e)=>{
          setCampeonatoBrasileiro(e.data)
        }).catch(e=>console.error('logErroGetAPICampeonato',e))
      })()
    }, [])

    return (
      <div>
        <label htmlFor="nameChampionship">Nome Campeonato: </label>
        <br></br>{
        <input id="nameChampionship" type="text" value={campeonatoBrasileiro.nome} style={{...estilos.inputBackgroundColor, ...estilos.width}} readOnly></input>}
        <br></br>
      </div>
    );
}
  
  
  export default BrzlnChampionship;