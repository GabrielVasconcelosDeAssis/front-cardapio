import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Lojas from './pages/Lojas'
import NavBar from './pages/NavBar'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Login />} />
    <Route path='/cadastro'element={<Cadastro/>} />
    <Route path='/sobre'element={<Sobre />} />
    <Route path='/cardapio'element={<Cardapio />} />
    <Route path='/lojas'element={<Lojas />} />
    <Route path='*'element={<h1 className='text-center text-5xl p-30'>Error 404</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
