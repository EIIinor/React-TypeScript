
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductsContext, FeaturedProductsContext, FourProductsContext } from './contexts/contexts'
import {ShoppingCartProvider} from './contexts/ShoppingCartContext'


function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [four, setFour] = useState([])
  


  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchFourData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFour(await result.json())
    }
    fetchFourData()

  }, [setProducts, setFeatured, setFour])  




  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <FourProductsContext.Provider value={four}>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/products' element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/search' element={<SearchView />} />
        <Route path='/compare' element={<CompareView />} />
        <Route path='/wishlist' element={<WishlistView />} />
        <Route path='/shoppingcart' element={<ShoppingCartView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
      </FourProductsContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductsContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
