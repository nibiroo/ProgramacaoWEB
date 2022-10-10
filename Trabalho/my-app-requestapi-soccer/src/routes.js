// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeFixed from './components/HomeFixed';
import HomeDynamic from './components/HomeDynamic';
import BrzlnChampionship from './components/pages/Championship';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/homeFixed" element={ <HomeFixed/> } />
        <Route path="/" element={ <HomeDynamic/> } />
        <Route path="/brazilianChampionship" element={ <BrzlnChampionship/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;