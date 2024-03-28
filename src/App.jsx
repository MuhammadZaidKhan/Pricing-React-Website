import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import PricingPage from './Components/PricingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricingPage' element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;