import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Welcome from './components/bienvenida/Welcome'
import Dentistas from './components/dentistas/Dentistas'
import Destacados from './components/dentistas/destacados/Destacados'
import Contacto from './components/contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import Detalle from './components/dentistas/detalle/Detalle'

function App() {
  

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='dentistas/*' element={<Dentistas/>}/>
        <Route path='dentistas/dentista/:id' element={<Detalle/>}/>
        <Route path='destacados' element={<Destacados/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
