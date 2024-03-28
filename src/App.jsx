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

{/* <div className="relative">
                    <img src={Ellipse1} alt="Top-pictures" className="z-0" />
                    <img
                        src={Ellipse2}
                        alt="Top-pictures"
                        className="absolute top-[1px] left-[1px] z-10 transform rotate-[-1deg]"
                    />
                </div> */}