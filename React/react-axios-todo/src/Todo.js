import React, {Component} from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            isBeingEdited: false,
        }
    }

    handleEditToggle = () => {
        this.setState(prev => {
            return {isBeingEdited: !prev.isBeingEdited}
        })
    }

    handleSave = () => {
        this.handleEditToggle()
        this.props.handleSave(this.state, this.props._id) //passing in all of state is a little sloppy, but in this case it's okay and the api will ignore isBeingEdited, can instead make an object with the this.state. things we want
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    checkBox = (e) => {
        this.props.handleSave({completed: e.target.checked}, this.props._id)
    }

    render(){
        const style = {
            border: "2px solid black",
            padding: "10px"
        }

        const imageSize = {
            height: '120px',
            width: 'auto',
        }

        const lineThrough = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }

        const regularDisplay = (
            <div style={style}>
                <h1 style={lineThrough}>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <img style={imageSize} src={this.props.imgUrl} alt={this.props.title}/>
                <div>Completed?
                    <input onChange={this.checkBox} checked={this.props.completed ? true : false} type="checkbox" />
                </div>
                <button onClick={this.handleEditToggle}>Edit</button>
                <button onClick={()=> this.props.handleDelete(this.props._id)}>X</button>
            </div>
        )

        const form = (
            <div style={style}>
                <form>
                    Title: <input onChange={this.handleChange} name='title' value={this.state.title} />
                    Description: <input onChange={this.handleChange} name='description' value={this.state.description} />
                    Image: <input onChange={this.handleChange} name='imgUrl' value={this.state.imgUrl}/>
                    <button onClick={this.handleSave}>Save</button>
                </form>
            </div>
        )

        return this.state.isBeingEdited ? form : regularDisplay
    }
}