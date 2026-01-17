import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Lojas from './pages/Lojas'
import NavBar from './pages/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/sobre'element={<Sobre />} />
    <Route path='/cardapio'element={<Cardapio />} />
    <Route path='/lojas'element={<Lojas />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
