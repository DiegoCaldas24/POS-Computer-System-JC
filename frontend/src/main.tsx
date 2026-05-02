import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import RepairsPage from './pages/Repairs'
import HomePage from './pages/Home'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/repairs" element={<RepairsPage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
)
