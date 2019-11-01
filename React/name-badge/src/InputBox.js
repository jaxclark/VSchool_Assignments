import React, {Component} from 'react'
import Badge from './Badge'

export default class InputBox extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birth: '',
            phone: '',
            food: '',
            summary: '',
            info: [],
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }
    
    render(){
        return(
            <div className='all'>
                <div className='inputBox'>
                    <form onSubmit={this.handleSubmit} className="form">
                        <input onChange={this.handleChange} type="text" name="firstName" id="inputBox" value={this.state.firstName} placeholder="First Name" />
                        <input onChange={this.handleChange} type="text" name="lastName" id="inputBox2" value={this.state.lastName} placeholder="Last Name" />
                        <input onChange={this.handleChange} type="email" name="email" id="inputBox" value={this.state.email} placeholder="Email" />
                        <input onChange={this.handleChange} type="text" name="birth" id="inputBox2" value={this.state.birth} placeholder="Place of Birth" />
                        <input onChange={this.handleChange} type="text" name="phone" id="inputBox" value={this.state.phone} placeholder="Phone" />
                        <input onChange={this.handleChange} type="text" name="food" id="inputBox2" value={this.state.food} placeholder="Favorite Food" />
                        <input onChange={this.handleChange} type="text" name="summary" id="summaryBox" value={this.state.summary} placeholder="Tell us about yourself" />
                        <button onClick={this.handleChange} id="sButton" >Submit</button>
                    </form>
                </div>
                <div>
                    <Badge firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            birth={this.state.birth}
                            phone={this.state.phone}
                            food={this.state.food}
                            summary={this.state.summary}
                            />
                </div>
            </div>
        )
    }
}