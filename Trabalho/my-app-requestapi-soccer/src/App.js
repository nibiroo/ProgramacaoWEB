/* IMPORTS */
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SideNav from "./components/SideNav";

function App() {
  /* Token teste de API-FUTEBOL */
  const token = "test_9d7ac31c1885497d8ec1f76522b841";

  /* Função para conectar-se a API */
  const fncGETAPI = async()=> {
    await axios({
      method: "GET",
      url: "https://api.api-futebol.com.br/v1/campeonatos",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((e) => {
      console.log("responseRequestAPI", e)
    })
  }

  function fncAlertLinkedIn() {
    alert('<a href="https://www.linkedin.com/in/guilhermedecarvalhomachado/">Guilherme Machado</a> e <a href="https://www.linkedin.com/in/agnaldo-pereira-da-silva-junior-2b08181a2/">Agnaldo Pereira</a>.');
  }
  /*  */
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
      <SideNav/>
      <button onClick={fncGETAPI}>OK</button>
    </div>
  );
}

export default App;
