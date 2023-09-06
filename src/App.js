import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articleRedux/Listarticles';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavScroll from './admin/components/Navscroll';
import { ToastContainer } from 'react-toastify';
import Cart from './components/articleRedux/Cart';




function App() {
  return (
    <div className="App">

      <ToastContainer />
      <Router>
        <NavScroll />
        <Routes>
          <Route path='/listearticles' element={<Listarticles />} />
          <Route path='/articlesadmin' element={<ProductsAppAdmin />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
