import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router";
import Home from '../pages/Home';
import Merchant from '../pages/Merchant';
import Products from '../pages/Products';
import Customer from '../pages/Customer';
import Setting from '../pages/Setting';
import Reports from '../pages/Reports';
import Subscription from '../pages/Subscription';


function Controller() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/merchant' element={<Merchant/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/customer' element={<Customer/>} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/subscription' element={<Subscription/>} />


        </Routes>
      </Router>
    </>
  );
}

export default Controller;