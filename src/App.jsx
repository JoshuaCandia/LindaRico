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

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {services.map((service) => (
          <Route
            key={service.id}
            path={`/servicios${service.url}`}
            element={<Services title={service.title} image={service.imgService} description={service.description} services={service.services} />}
          />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
