import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './App.css';
import GetImages from './components/GetImages';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
   <Router>
<Navbar/>     
        <Routes>
       
        <Route  path="register"  element={<Register/>} />
        <Route  path="login"  element={<Login/>} />
        <Route  path="/"  element={<GetImages/>} />
          {/* <Route path="/detail/:id" element={<Detail/>}/> */}
         
      
         
          
        
        </Routes>
      </Router>


    </div>
  );
}

export default App;
