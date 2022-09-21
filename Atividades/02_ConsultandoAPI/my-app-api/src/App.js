import { useState } from "react";

function App(){

const [cep, setCEP] = useState([]);
const [address, setAddress] = useState([]);
const [city, setCity] = useState([]);
const [uf, setUF] = useState([]);

const estilos = {
  inputBackgroundColor: {
    backgroundColor: "#A9A9A9",
  }
}

  function getCEP(){
    const urlAPICEP = 'https://viacep.com.br/ws/'+cep+'/json/';
    const urlAPIAddress = 'https://viacep.com.br/ws/'+address+'/json/';

    fetch(urlAPICEP)
    .then((response) => response.json())
    .then((json) => {
      setCEP(json)

      console.log(json)
    })
  }

  function disableFieldsExceptCEP(){
    var r = document.getElementById('userAddress');
    r.setAttribute("disabled", "disabled");

    var c = document.getElementById('userCity');
    c.setAttribute('disabled', 'disabled');

    var uf = document.getElementById('userUF');
    uf.setAttribute('disabled', 'disabled');
  }
  function enableFields(){
    var r = document.getElementById('userAddress');
    r.removeAttribute("disabled");

    var c = document.getElementById('userCity');
    c.removeAttribute("disabled");

    var uf = document.getElementById('userUF');
    uf.removeAttribute("disabled");
  }


    return(
      <div>
        <label htmlFor="userCEP" >Informe o CEP (Sem pontuações):</label>
        <br></br>
        <input id="userCEP" type="int" onChange={e => setCEP(e.target.value)}></input>
        <br></br>
        {/*  */}
        <label htmlFor="Address">Rua:</label>
        <br></br>
        <input id="Address" type="int" value={cep.logradouro} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>

        <label htmlFor="City">Informe a Cidade:</label>
        <br></br>
        <input id="City" type="int" value={cep.localidade} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>

        <label htmlFor="UF">Informe o Estado:</label>
        <br></br>
        <input id="UF" type="int" value={cep.uf} style={estilos.inputBackgroundColor} readOnly></input>
        <br></br>

        {/* <label htmlFor="userAddress">Informe a Rua:</label>
        <br></br>
        <input id="userAddress" type="int" value={address} onChange={e => setCEP(e.target.value)}></input>
        <br></br>

        <label htmlFor="userCity">Informe a Cidade:</label>
        <br></br>
        <input id="userCity" type="int" value={address} onChange={e => setCEP(e.target.value)}></input>
        <br></br>

        <label htmlFor="userUF">Informe o Estado:</label>
        <br></br>
        <input id="userUF" type="int" value={address} onChange={e => setCEP(e.target.value)}></input>
        <br></br> */}

        <button onClick={getCEP}>Consulte</button>
      </div>
    )
}
export default App;