import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.module.scss'
import { About } from './pages/About/About'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main/Main'
import { Careers } from './pages/Careers/Careers'
import { Help } from './pages/Help/Help'
import { BuyCrypto } from './pages/BuyCrypto/BuyCrypto'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="about" element={<About/>} />
        <Route path="careers" element={<Careers/>} />
        <Route path="help" element={<Help/>} />
        <Route path="crypto" element={<BuyCrypto/>}>
           <Route path=":cryptoOption/:currencyBuy/:currencySell" element= {<BuyCrypto/>} />
        </Route>
      </Route>
    </Routes>
  )
}
export default App