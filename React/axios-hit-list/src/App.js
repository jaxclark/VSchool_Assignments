import React, {Component} from 'react'
import HitListContainer from './HitListContainer'
import Navbar from './Navbar'

class App extends Component {
  constructor(){
    super()

  }
  render(){
    return (
      <div className="app">
        <Navbar />
        <HitListContainer />
      </div>
    )
  }
}

export default App