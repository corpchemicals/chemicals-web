import React, {useState} from 'react'
import Layout from './containers/Layout'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Order from './pages/Order'

const App = () => {
  const [clientData, setClientData] = useState({})
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="pedidos" element={<Order clientData={clientData} setClientData={setClientData} />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter> 
)}

export default App
