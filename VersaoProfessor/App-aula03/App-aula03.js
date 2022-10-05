import {useState} from 'react';

function App() {
  const [aluno,setAluno]= useState('');
  const [email,setEmail]= useState('');
  const [idade,setIdade]= useState('');

  function changeName(){
    setAluno('Alciomar')
  }

  return (
    <div>
      <h1> Aula 03</h1>
      <h2>Olá {aluno} </h2>

      <button onClick={changeName}>
        Mudar nome
      </button>

      <Nome aluno="Alciomar Holanda" idade="29"/>
      <Nome aluno="Fabiano" idade="30"/>

      <form>
          <label>Nome: </label>
          <input 
            placeholder='Digite seu nome'
            value={aluno}
            onChange={(e) => setAluno(e.target.value)}
          />
      </form>

    </div>
  );
}

export default App;

//            {nome, idade}
function Nome(props){
  return(
    <p>{props.aluno} - {props.idade}</p>
  );
}
