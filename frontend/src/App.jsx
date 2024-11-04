import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Lists from './Lists'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<Lists />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
