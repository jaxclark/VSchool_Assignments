import React, {Component} from 'react'
import Badge from './Badge'
import BadgeList from './BadgeList'
import NewBadgesContainer from './NewBadgesContainer'

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
            badgesArr: [],
            button: 'disabled',
            allBadges: [],
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
        // this.setState({[this.state.info]: [...prevState.info, value]})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let {firstName, lastName, email, birth, phone, food, summary} = this.state
        
        const newBadge = {
            firstName,
            lastName,
            email, 
            birth, 
            phone, 
            food, 
            summary
        }
        if(firstName === '' || lastName === '' || email === '' || birth === '' || phone === '' || food === '' || summary.length < 3){
            alert(`Please fill in all the fields before submitting.\nAll fields need at least three characters. `)
        } else {
            this.setState({badgesArr: [newBadge]})
            this.setState(prev =>{
                return {allBadges: [...prev.allBadges, newBadge]}
            })
        }

    }
    
    render(){
        return(
            <div className='all'>
                <div className='inputBox'>
                    <form onSubmit={this.handleSubmit} className="form">
                        <input onChange={this.handleChange} type="text" name="firstName" id="inputBox" value={this.state.firstName} minLength='3' placeholder="First Name" />
                        <input onChange={this.handleChange} type="text" name="lastName" id="inputBox2" value={this.state.lastName} minLength='3' placeholder="Last Name" />
                        <input onChange={this.handleChange} type="email" name="email" id="inputBox" value={this.state.email} minLength='3' placeholder="Email" />
                        <input onChange={this.handleChange} type="text" name="birth" id="inputBox2" value={this.state.birth} minLength='3' placeholder="Place of Birth" />
                        <input onChange={this.handleChange} inputMode="numeric" name="phone" id="inputBox" value={this.state.phone} minLength='3' placeholder="9999999999" pattern="[0-9]{10}" />
                        <input onChange={this.handleChange} type="text" name="food" id="inputBox2" value={this.state.food} minLength='3' placeholder="Favorite Food" />
                        <textarea onChange={this.handleChange} type="text" name="summary" id="summaryBox" value={this.state.summary} placeholder="Tell us about yourself" />
                        <button id="sButton" >Submit</button>
                    </form>
                </div>
                <div>
                    {this.state.badgesArr.length < 1 ? <Badge /> : <BadgeList badgesArr={this.state.badgesArr} />}
                </div>
                <div>
                    <NewBadgesContainer badgesArr={this.state.allBadges}/>
                </div>
            </div>
        )
    }
}