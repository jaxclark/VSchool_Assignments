import React, {Component} from 'react'
// import List from './List'
import PeopleContainer from './PeopleContainer'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            age: '', 
            people: [],
            // list: ''
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {fullName, age} = this.state

        const newPerson = {
            fullName, 
            age
        }

        this.setState(prev => {
            return{
                people: [...prev.people, newPerson],
                // list: [...prev.list, newList]
            }
    
        })
        console.log(this.state.people)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = 'text' 
                            placeholder='Full Name' 
                            name='fullName' 
                            value={this.state.fullName}
                            onChange={this.handleChange}
                    />
                    <input type = 'text' 
                            placeholder='Age' 
                            name='age' 
                            value={this.state.age}
                            onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <h1>{this.state.fullName} {this.state.age}</h1>
                <PeopleContainer people={this.state.people} />
            </div>
        )
    }
}

export default Form