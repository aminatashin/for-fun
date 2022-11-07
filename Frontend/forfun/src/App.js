
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Reserved from "./components/reserved";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/edit/:appointmentId' element={<Home/>} />
   <Route path='/reservations' element={<Reserved/>} />
   <Route path='*' element={'404 page not found'} />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
