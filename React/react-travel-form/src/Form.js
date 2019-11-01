import React, {Component} from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            diet: [],
        }
    }

    handleChange = e => {
        let {name, value} = e.target

        if(name === 'diet'){
            const prevArr = [...this.state.diet]
            prevArr.includes(value) ? prevArr.splice(prevArr.indexOf(value), 1) : prevArr.push(value)
            this.setState({diet: prevArr})
        }else {
            this.setState({[name]: value})
        }
    }

    handleSelect = e =>{
        e.preventDefault()
        this.setState({location: e.target.value})
        console.log(this.state.location)
    }

    handleSubmit = e => {
        e.preventDefault()
        let {firstName, lastName, age, gender, location, diet} = this.state
        alert(`First name: ${firstName}
        \nLast name: ${lastName}
        \nAge: ${age}
        \nGender: ${gender}
        \nLocation: ${location}
        \nDietary restrictions: ${diet}
        `)
    }

    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                    <input type="text" placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                    <input type="number" placeholder='Age' name='age' value={this.state.age} onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
                    <input type="radio" name="gender" value="Trans" onChange={this.handleChange} /> Trans
                    <input type="radio" name="gender" value="Non-Binary" onChange={this.handleChange} /> Non-Binary
                    <br/>
                    <br/>
                    <h3>Choose your destination :</h3>
                    <select value={this.state.location} onChange={this.handleSelect}>
                        <option name="location" value="Osaka, Japan">Osaka, Japan</option>
                        <option name="location" value="Casablanca, Morocco">Casablanca, Morocco</option>
                        <option name="location" value="Chiang Mai, Thailand">Chiang Mai, Thailand</option>
                        <option name="location" value="Perth, Scotland">Perth, Scotland</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" name="diet" value="Vegetarian" onChange={this.handleChange} />Vegetarian
                    <input type="checkbox" name="diet" value="Vegan" onChange={this.handleChange} /> Vegan
                    <input type="checkbox" name="diet" value="Lactose-Free" onChange={this.handleChange} /> Lactose-Free
                    <input type="checkbox" name="diet" value="Kosher" onChange={this.handleChange} /> Kosher
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>
        )
    }
}
