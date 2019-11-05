import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state ={
            title: '',
        } //needs to be the same names from the api
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.title} name='title'/>
                <button>Submit</button>
            </form>
        )
    }
}
//can also write form like this without the handleSubmit in this file, using the handle submit in the App file: 
//  <form onSubmit={(e)=>this.props.handleSubmit(this.state, e)}>