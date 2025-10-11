import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import Homepage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Supportpage from './landing_page/support/Supportpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/about" element={<AboutPage/>}/>
     <Route path="/product" element={<ProductPage/>}/>
     <Route path="/pricing" element={<Pricingpage/>}/>
      <Route path="/support" element={<Supportpage/>}/>
      <Route path="*" element={<NotFound/>}/>    
  </Routes>
  <Footer />
  </BrowserRouter>
);


