import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articleRedux/Listarticles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Listarticles />} />
      </Routes>
    </Router>
  );
}

export default App;
