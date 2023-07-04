import React from 'react';
import './App.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from "./pages/OurStore"
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup ';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPloicy from './pages/RefundPloicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndContions from './pages/TermAndContions';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SingleProduct from './pages/SingleProduct';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
<Route  path="/" element={<Layout />}>
<Route index element={<Home />} />
  <Route path="About" element={ <About />} />
  <Route path="Contact" element={ <Contact />} />
  <Route path="product" element={ <OurStore />} />
  <Route path="product/:id" element={<SingleProduct />} />
  <Route path="blogs" element={ <Blog />} />
  <Route path="blog/:id" element={<SingleBlog />} />
  <Route path="cart" element={<Cart />} />
  <Route path="checkout" element={<Checkout />} />
  <Route path="Compare-Product" element={<CompareProduct />} />
  <Route path="wishlist" element={<Wishlist />} />
  <Route path="login" element={<Login />} />
  <Route path="signup" element={<Signup />} />
  <Route path="forgot-password" element={<Forgotpassword />} />
  <Route path="reset-password" element={<Resetpassword />} />
  <Route path="privacy-policy" element={<PrivacyPolicy />} />
  <Route path="refund-policy" element={<RefundPloicy />} />
  <Route path="shipping-policy" element={<ShippingPolicy />} />
  <Route path="term-conditions" element={<TermAndContions />} />
</Route>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App;

