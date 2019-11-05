import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Services from './Services'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/about' component={About} ></Route>
        <Route path='/services' component={Services} ></Route>
      </Switch>
      <Footer />
    </div>
  )
}