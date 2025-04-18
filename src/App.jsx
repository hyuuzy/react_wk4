// import 'antd/dist/reset.css';
import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import store from './redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <HelmetProvider context={{}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="/products/id/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </HelmetProvider>
  </Provider>
    </>
  )
}

export default App

