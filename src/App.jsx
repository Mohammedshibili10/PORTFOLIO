

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Work from './pages/Work'


function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/work' element={<Work/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
