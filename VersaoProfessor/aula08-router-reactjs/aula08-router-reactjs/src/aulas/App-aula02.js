

import {useState} from "react";

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function register(e){
    e.preventDefault();
    alert("Usuário registrado.");

    setUser({
      nome: nome,
      email: email,
      idade: idade
    })
  }

  return (
    <div>
      <h1>Cadastro de usuário</h1>
      <form onSubmit={register}>
        <label> Nome: </label>
        <input
        placeholder="Digite seu nome" 
        value={nome}
        onChange={(e)=> setNome(e.target.value)}
        /> <br /><br />

        <label> E-mail: </label>
        <input
        placeholder="Digite seu e-mail" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        /> <br /><br />

        <label> Idade: </label>
        <input
        placeholder="Digite sua idade" 
        value={idade}
        onChange={(e)=> setIdade(e.target.value)}
        /> <br /><br />

        <button type="submit">Registrar</button>


      </form>


      <h2> Dados do usuário.</h2>

      <p>Nome: {user.nome}</p>
      <p>E-mail: {user.email}</p>
      <p>Idade: {user.idade}</p>
    </div>
  );
}




export default App;


// function Nome(props) {
//   return (
//     <p> {props.nome} - Idade {props.idade}</p>
//   );
// }
