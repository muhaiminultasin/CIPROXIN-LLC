
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./Components/common/Navbar"
import Home from './Components/Home';
import TermsCondition from './Components/TermsCondition';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/terms&condition' element={<TermsCondition/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
