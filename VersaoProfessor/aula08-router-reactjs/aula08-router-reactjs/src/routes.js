// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Error from './pages/Error';
import Produto from './pages/Produto';

import Header from "./components/Header";

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/produto/:id" element={ <Produto/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;