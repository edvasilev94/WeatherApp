import { Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Footer from './componenets/Footer/Footer';

import './App.css'
function App() {

  return (
      <div className="conainer-main">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default App
