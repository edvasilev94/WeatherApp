import { Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Footer from './componenets/Footer/Footer';

import './App.css'
import Navbar from './componenets/Navbar/Navbar';
function App() {

  return (
      <div className="conainer-main">
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default App
