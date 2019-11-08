import React, {Component} from 'react'
import {withProvider} from './PostProvider'
import uuidv4 from 'uuid/v4'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.title,
            description: props.description,
            image: props.image,
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {title, description, image} = this.props.post
            this.setState({title, description, image})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        if(this.props.type === 'add'){
            this.props.addPost({...this.state, id: uuidv4()})
        } else {
            this.props.toggle()
            this.props.editPost({...this.state, id: this.props.id}, this.props.id)
        }
        // this.props.addPost({...this.state, id: uuidv4()})
    }
    render(){
        return(
            <div className={this.props.type === 'add' ? 'submit' : 'edit'} >
                <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'submitForm' : 'editForm'}>
                    <label className='label1' htmlFor="title">Title: 
                        <input id='title' onChange={this.handleChange} value={this.state.title} name='title' type="text"/>
                    </label>
                    <label className='label2' htmlFor="description">Description: 
                        <input id='description' onChange={this.handleChange} value={this.state.description} name='description' type="text"/>
                    </label>
                    <label className='label3' htmlFor="image">Image: 
                        <input id='image' onChange={this.handleChange} value={this.state.image} name='image' type="text"/>
                    </label>
                    <button >{this.props.button}</button>
                </form>
            </div>
        )
    }
}

export default withProvider(Form)