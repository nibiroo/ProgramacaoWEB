import {Link, useParams} from 'react-router-dom';

function Produto() {
    const {id} = useParams();
    return (
      <div>
        Produto - {id}
        <Link to="/sobre"> Sobre </Link>
      </div>
    );
}
  
  
  export default Produto;
  