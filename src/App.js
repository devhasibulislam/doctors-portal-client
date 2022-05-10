import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About/About';
import Appointment from './routes/Appointment/Appointment';
import ContactUs from './routes/ContactUs/ContactUs';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Reviews from './routes/Reviews/Reviews';
import Footer from './shared/Footer/Footer';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
