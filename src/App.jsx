import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path='/app' element={<AppLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
