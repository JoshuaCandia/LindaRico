//styles
import './App.css'
//hooks
import { Routes, Route, useLocation } from 'react-router-dom'
import { services } from './lib/data'
//components
import NavBar from './components/NavBar/Navbar'
import ButtonArrowUp from './components/Buttons/ButtonArrowUp'
import ButtonWhatsApp from './components/Buttons/ButtonWhatsApp'
//views
import Error404 from './views/404'
import Home from './views/Home'
import Services from './views/Services'
import Footer from './components/Footer/Footer'
import Contacto from './views/Contacto'

function App() {
  const location = useLocation()
  return (
    <div className='font-customFontRoboto '>
      {location.pathname === '/' && (
        <>
          <NavBar />
          <ButtonArrowUp />
          <ButtonWhatsApp />
        </>
      )}
      {location.pathname === '/area-medio-ambiente' && (
        <>
          <NavBar />
          <ButtonArrowUp />
          <ButtonWhatsApp />
        </>
      )}
      {location.pathname === '/higiene-y-seguridad' && (
        <>
          <NavBar />
          <ButtonArrowUp />
          <ButtonWhatsApp />
        </>
      )}
      {location.pathname === '/contacto' && (
        <>
          <NavBar />
          <ButtonArrowUp />
          <ButtonWhatsApp />
        </>
      )}
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        {services.map((service) => (
          <Route
            key={service.id}
            path={`/${service.url}`}
            element={
              <Services
                title={service.title}
                image={service.imgService}
                description={service.description}
                services={service.services}
              />
            }
          />
        ))}
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
      {location.pathname === '/higiene-y-seguridad' && <Footer />}
      {location.pathname === '/area-medio-ambiente' && <Footer />}
      {location.pathname === '/contacto' && <Footer />}
    </div>
  )
}

export default App
