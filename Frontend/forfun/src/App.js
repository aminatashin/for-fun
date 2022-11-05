
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='*' element={'404 page not found'} />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
