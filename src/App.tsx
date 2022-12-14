
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ShoppingCartProvider} from './contexts/ShoppingCartContext';

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

/* import ProductProvider from './contexts/ProductContext' */

import ApiProductProvider from './contexts/ApiProductContext';
import EditProductsView from './views/EditProductsView';
import UpdateProductView from './views/UpdateProductView';

function App() {



  return (
    <BrowserRouter>
      <ApiProductProvider>
      <ShoppingCartProvider>
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
        <Route path='/editProducts' element={<EditProductsView />} />
        <Route path='/updateProduct/:id' element={<UpdateProductView />}/>
      </Routes>
      </ShoppingCartProvider>
      </ApiProductProvider>
    </BrowserRouter>
  );
}

export default App;
