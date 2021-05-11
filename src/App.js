import './App.css';
import RenderizadoElementos from './components/RenderizadoElementos';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import {Eventos,EventosES7,MoreEvents} from './components/Eventos';
import Padre from './components/ComunucacionComponentes';
import VidaComponente from './components/VidaComponente';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';

function App() {
  return (
    <div className="App">
      <RenderizadoCondicional/>
      <hr/>
      <RenderizadoElementos/>
      <hr/>
      <Eventos/>
      <hr/>
      <EventosES7/>
      <hr/>
      <MoreEvents/>
      <hr/>
      <Padre/>
      <hr/>
      <VidaComponente/>
      <hr/>
      {/* <ScrollHooks/> */}
      <hr/>
      <ContadorHooks seguidores="Seguidores :D"/>
      <hr/>
      <RelojHooks/>
      <hr/>
      <Referencias/>
      {/* <HooksPersonalizados/> */}
      {/* <AjaxHooks/> */}
      {/* <AjaxApis/> */}
    </div>
  );
}

export default App;
