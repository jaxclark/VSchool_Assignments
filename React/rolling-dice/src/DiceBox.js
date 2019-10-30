import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
        }
    }

    handleRand = () => {
        let random1 = Math.floor(Math.random() * 6 + 1)
        let random2 = Math.floor(Math.random() * 6 + 1)
        let random3 = Math.floor(Math.random() * 6 + 1)
        let random4 = Math.floor(Math.random() * 6 + 1)
        let random5 = Math.floor(Math.random() * 6 + 1)
        this.setState({num1: random1})
        this.setState({num2: random2})
        this.setState({num3: random3})
        this.setState({num4: random4})
        this.setState({num5: random5})
    }

    handleReset = () => {
        this.setState({num1: 0})
        this.setState({num2: 0})
        this.setState({num3: 0})
        this.setState({num4: 0})
        this.setState({num5: 0})
    }

    render() {
        return(
            <div className='diceBox'>
                <Die className='die1' number={this.state.num1} />
                <Die className='die2' number={this.state.num2} />
                <Die className='die3' number={this.state.num3} />
                <Die className='die4' number={this.state.num4} />
                <Die className='die5' number={this.state.num5} />
                <button className='button1' onClick={this.handleRand}>Roll Dice</button>
                <button className='button2' onClick={this.handleReset}>Reset</button>
            </div>
        )
    }    
}

export default DiceBox