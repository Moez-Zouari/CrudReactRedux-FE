import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articleRedux/Listarticles';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavScroll from './admin/components/Navscroll';
import { ToastContainer } from 'react-toastify';
import Cart from './components/articleRedux/Cart';
import StripePayment from './components/articleRedux/StripePayment';
import Login from './admin/components/Login';
import Logout from './admin/components/Logout';
import Register from './admin/components/Register';





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
          <Route path='/pay/:total' element={<StripePayment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
