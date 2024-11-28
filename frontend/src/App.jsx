import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Products from '../pages/Products.jsx';
import Categories from '../pages/Categories.jsx';
import Orders from '../pages/Orders.jsx';
import Users from '../pages/Users.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to My Store</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
