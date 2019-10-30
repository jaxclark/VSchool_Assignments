import React, {Component} from 'react'

export default class Count extends Component {
    render(){
        return (
            <h1 style={{textAlign: 'center'}}>{this.props.number}</h1>
        )
    }
}

