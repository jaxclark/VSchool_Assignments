import React, {Component} from 'react'
import Color from './Color'
import Axios from 'axios'

export default class ColorContainer extends Component {
    constructor(){
        super()
        this.state = {
            colors: [],
        }
    }

    componentDidMount(){
        Axios.get('http://www.colr.org/json/colors/random').then(res => {
            this.setState({colors: res.data.colors})
        })
    }

    render(){
        const mappedColor = this.state.colors.map((data) => <Color color={data.hex} />)
        return(
            <div >
                {mappedColor}
            </div>
        )
    }
}