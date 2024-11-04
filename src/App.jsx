
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './Components/Page';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
