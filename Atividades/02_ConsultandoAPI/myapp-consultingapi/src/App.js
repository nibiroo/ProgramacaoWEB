import { useState } from "react";

function App(){

const [cep, setCEP] = useState([]);

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
  }
}

function getCEP(){
   const urlAPICEP = 'https://viacep.com.br/ws/'+cep+'/json/';

  fetch(urlAPICEP)
  .then((response) => response.json())
  .then((json) => {
    setCEP(json)

    console.log(json)
  })
}

    return(
      <div>
        <p>PESQUISE PELO CEP</p>
        <label htmlFor="userCEP" >Informe o CEP (Sem pontuações):</label>
        <br></br>
        <input id="userCEP" type="int" onChange={e => setCEP(e.target.value)}></input>
        <br></br>
        {/*  */}
        <label htmlFor="Address">Rua:</label>
        <br></br>
        <input id="Address" type="int" value={cep.logradouro} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>

        <label htmlFor="City">Cidade:</label>
        <br></br>
        <input id="City" type="int" value={cep.localidade} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>

        <label htmlFor="UF">UF:</label>
        <br></br>
        <input id="UF" type="int" value={cep.uf} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>
        
        <button onClick={getCEP}>Consulte</button>
      </div>
    )
}
export default App;