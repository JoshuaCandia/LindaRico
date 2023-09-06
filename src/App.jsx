//styles
import './App.css';
//hooks
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home';
import NavBar from './components/NavBar/Navbar';
import { services } from './lib/data';
import Services from './views/Services';
import Footer from './components/Footer/Footer';
import Contacto from './views/Contacto';
import ButtonArrowUp from './components/Buttons/ButtonArrowUp';
import ButtonWhatsApp from './components/Buttons/ButtonWhatsApp';

function App() {
  return (
    <div className='font-customFontRoboto '>
      <NavBar />
      <ButtonArrowUp />
      <ButtonWhatsApp />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        {services.map((service) => (
          <Route
            key={service.id}
            path={`/servicios${service.url}`}
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
      <Footer />
    </div>
  );
}

export default App;
