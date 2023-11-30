import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
/*https://ctd-esp-fe3-final-seven-sable.vercel.app/*/

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/dentist/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
