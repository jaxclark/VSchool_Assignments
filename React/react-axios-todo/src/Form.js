import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state ={
            title: '',
            description: '',
            imgUrl: '',
        } //needs to be the same names from the api
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: '',
        })
    }

    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
            height: "120px",
            justifyContent: 'space-around',
            alignItems: "center",
            border: "2px solid black",
            padding: "20px"
        }

        return(
            <form onSubmit={this.handleSubmit} style={style} >
                <label htmlFor="title">Title: 
                    <input id='title' onChange={this.handleChange} value={this.state.title} name='title'/>
                </label>
                <label htmlFor="img">Image: 
                    <input id='img' onChange={this.handleChange} value={this.state.imgUrl} name='imgUrl'/>
                </label>
                <label htmlFor="description">Description: 
                    <input id="description" onChange={this.handleChange} value={this.state.description} name="description" />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
//can also write form like this without the handleSubmit in this file, using the handle submit in the App file: 
//  <form onSubmit={(e)=>this.props.handleSubmit(this.state, e)}>