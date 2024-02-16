import './App.css';
import Intro from './comp/intro/Intro';
import GamePage from './comp/game/GamePage';
import Register from './comp/login/Register';
import Login from './comp/login/Login';
import Home from './comp/login/Home';
import InHome from './comp/login/InHome';
import Outro from './comp/outro/Outro';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<InHome/>}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
          <Route path="/gamepage" element={<GamePage/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/outro' element={<Outro/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
