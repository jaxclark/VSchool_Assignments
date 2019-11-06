import React from 'react';
import {withProvider} from './ThemeProvider'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default withProvider(App)