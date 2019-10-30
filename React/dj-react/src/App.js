import React, {Component} from 'react'
import Mixer from './Mixer'
// import Count from './Count'
// import { thisExpression } from '@babel/types'

class App extends Component{
    constructor() {
        super()
    }
    render() {
        return(
            <div className='appStyle'>
                <Mixer />
            </div>
        )
    }
}

export default App