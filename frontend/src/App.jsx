
import './App.css'
import Login from './components/Login'
import { Routes, Route} from "react-router-dom";
import Register from './components/Register';
import axios from 'axios'
import Home from './components/Home';
function App() {
  axios.defaults.baseURL = import.meta.env.VITE_PORT;
  return (
<>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>

</>
  )
}

export default App
