import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer/index'
import CardGroup from './components/CardGroup'

function App() {
  return (
    <div className="App">
      <Header />
      <CardGroup />

      <Footer />
    </div>
  )
}

export default App
