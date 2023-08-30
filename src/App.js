import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articleRedux/Listarticles';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavScroll from './admin/components/Navscroll';


function App() {
  return (
    <Router>
      <NavScroll />
      <Routes>
        <Route path='/' element={<Listarticles />} />
        <Route path='/articlesadmin' element={<ProductsAppAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
