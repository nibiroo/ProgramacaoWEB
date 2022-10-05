

function App() {
  return (
    <div>
      <h1> Olá</h1>
      <Nome nome="Alciomar" idade="29" />
      <Nome nome="Fabiano" idade="40" />
    </div>
  );
}




export default App;


function Nome(props) {
  return (
    <p> {props.nome} - Idade {props.idade}</p>
  );
}
