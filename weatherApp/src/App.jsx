import { Routes, Route } from 'react-router-dom';
import Card from './componenets/Card/Card';

function App() {

  return (
        <Routes>
          <Route path='/' element={<Card />} />
        </Routes>
  )
}

export default App
