import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Beauty from './pages/beauty';
import Living from './pages/living';
import Details from './pages/Details';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Returns from './pages/Returns';
import Search from './pages/Search';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Accessories from './pages/Accessories';
import Footwear from './pages/Footwear';
import PreferencesSync from './Components/PreferencesSync';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PreferencesSync />
      <Routes>
        <Route path='/'>
        <Route index element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/living" element={<Living />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/footwear" element={<Footwear />} />

        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
