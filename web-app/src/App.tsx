import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import {
  Routes,
  Route,
} from 'react-router-dom'

import AuthProvider from './context/auth'
import LoginSuppliers from './pages/LoginSuppliers/LoginSuppliers'
import SingleProduct from './pages/products/SingleProduct'
import { RegisterSupplier } from './pages/RegisterSupplier/RegisterSupplier'
import { Categories } from './pages/categories/Categories'
import { Home } from './pages/Home'
import Promotions from './pages/promotions/Promotions'
import Search from './pages/Search'
import { Products } from './pages/products/Products'
import { MainSupplier } from './pages/main_fornecedores/MainSupplier';
import { CategoriesEditPage } from './pages/categories/categoriesEditPage'


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/product/edit/:id" element={<h1>Edit product Page</h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<h1>Common user login</h1>} />
        <Route path="/register" element={<h1>Common user login</h1>} />
        <Route path="/supplier/login" element={<LoginSuppliers />} />
        <Route path="/supplier/register" element={<RegisterSupplier />} />
        <Route path="/supplier/promotions" element={<Promotions />} />
        <Route path="/supplier/categories" element={<Categories /> } />
        <Route path="/supplier/categories/edit" element={<CategoriesEditPage /> } />
      </Routes>
    </AuthProvider>
  );

}

export default App;