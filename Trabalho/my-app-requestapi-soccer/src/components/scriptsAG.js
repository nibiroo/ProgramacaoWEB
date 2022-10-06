/* IMPORTS */
import axios from "axios";

/* Token teste de API-FUTEBOL */
const token = "test_9d7ac31c1885497d8ec1f76522b841";

/* Função para conectar-se a API */
export const fncGETAPICampeonato = async()=> {
  await axios({
    method: "GET",
    url: "https://api.api-futebol.com.br/v1/campeonatos",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((e) => {
    console.log("responseRequestAPI", e);
    console.log('olá');
  })
}
/* Função para conectar-se a API */
export const fncGETAPIArtilharia = async()=> {
  await axios({
    method: "GET",
    url: "https://api.api-futebol.com.br/v1/campeonatos/14/artilharia",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((e) => {
    console.log("responseRequestAPI", e);
    console.log('olá');
  })
}