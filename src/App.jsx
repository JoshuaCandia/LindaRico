//styles
import './App.css';
//hooks
import { Routes, Route } from 'react-router-dom';
//views
import Home from './views/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;