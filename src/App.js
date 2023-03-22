//Meus Css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Meus imports
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
        <div className='container'>
          <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/Register" element={ <Register/> }/>
          </Routes>
        </div>
        < Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
