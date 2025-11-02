import { Routes, Route } from 'react-router-dom'
import { services } from './lib/data'
// Components
import NavBar from './components/NavBar/Navbar'
import ButtonArrowUp from './components/Buttons/ButtonArrowUp'
import FloatingWhatsAppButton from './components/Buttons/FloatingWhatsAppButton'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// Views
import Error404 from './views/404'
import Home from './views/Home'
import Services from './views/Services'
import Contacto from './views/Contacto'

/**
 * Layout wrapper component
 * Handles common elements (navbar, buttons, footer) for all routes
 */
function LayoutWrapper({ children, showFooter = true }) {
  return (
    <>
      <NavBar />
      <ButtonArrowUp />
      <FloatingWhatsAppButton />
      {children}
      {showFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <div className='font-customFontRoboto'>
      <ScrollToTop />
      <Routes>
        {/* Página de error 404 - sin layout */}
        <Route path='*' element={<Error404 />} />

        {/* Página principal */}
        <Route
          path='/'
          element={
            <LayoutWrapper>
              <Home />
            </LayoutWrapper>
          }
        />

        {/* Páginas de servicios dinámicas */}
        {services.map((service) => (
          <Route
            key={service.id}
            path={`/${service.url}`}
            element={
              <LayoutWrapper>
                <Services
                  title={service.title}
                  image={service.imgService}
                  description={service.description}
                  services={service.services}
                />
              </LayoutWrapper>
            }
          />
        ))}

        {/* Página de contacto */}
        <Route
          path='/contacto'
          element={
            <LayoutWrapper>
              <Contacto />
            </LayoutWrapper>
          }
        />
      </Routes>
    </div>
  )
}

export default App
