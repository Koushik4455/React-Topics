import React from 'react'
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'
import Home from './Component/Pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
