import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Podcast from './routes/Podcast';



function App() {
  return (  
    <div className="App">
    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/Podcast' element={<Podcast/>}></Route>
      </Route>
    </Routes>



    </div>
  );
}

export default App;
