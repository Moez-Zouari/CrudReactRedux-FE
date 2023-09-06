import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articleRedux/Listarticles';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavScroll from './admin/components/Navscroll';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">

      <ToastContainer />
      <Router>
        <NavScroll />
        <Routes>
          <Route path='/' element={<Listarticles />} />
          <Route path='/articlesadmin' element={<ProductsAppAdmin />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
