import React, {Component} from 'react'
import Square from './Square'

class Mixer extends Component{
    constructor(){
        super()
        this.state = {
            colors: ["white", "black", "blue", "purple"]
        }
    }

    changeAll = () => {
        if(this.state.colors[0] === 'white'){
            console.log('if worked')
            this.setState({colors: ['black', 'black', 'black', 'black']})
        } else {
            this.setState({colors: ['white', 'white', 'white', 'white']})
        }
    }

    topPurple = () => {
        this.setState(prevState => {
            return {colors: ['purple', 'purple', prevState.colors, prevState.colors]}
        }

    )}

    leftBlue = () => {
        this.setState(prevState => {
            return {colors: [prevState.colors, prevState.colors, 'blue', prevState.colors]}
        }
    )}

    rightBlue = () => {
        this.setState(prevState => {
            return {colors: [prevState.colors, prevState.colors, prevState.colors, 'blue']}
        }
    )}

    render(){
        const mappedColors = this.state.colors.map((color) => <Square color={color} />)
        return (
            <div className='mixerStyle'>
                {mappedColors}
                <button onClick={this.changeAll}>Change All</button>
                <button onClick={this.topPurple}>Top Purple</button>
                <button onClick={this.leftBlue}>Bottom Left Blue</button>
                <button onClick={this.rightBlue}>Bottom Right Blue</button>
            </div>
        )
    }
}

export default Mixer