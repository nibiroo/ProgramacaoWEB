import {Link} from 'react-router-dom';

function Error() {
    return (
      <div>
        Erro - Página não encontrada.
        <Link to="/"> Home </Link>
        <Link to="/sobre"> Sobre </Link>
      </div>
    );
}
  
  
  export default Error;