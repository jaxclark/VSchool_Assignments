import React, {Component} from 'react'
import { withBounty } from './BountyProvider'

class BountyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            living: true,
            bountyAmount: props.bountyAmount,
            type: props.type,
        }
    }

    componentDidMount() {
        if(this.props.formType === 'update'){
            let {firstName, lastName, living, bountyAmount, type} = this.props.bountiesInfo
            this.setState({firstName, lastName, living, bountyAmount, type})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.formType === 'add'){
            this.props.handlePost(this.state)
            this.setState({
                firstName: '',
                lastName: '',
                living: true,
                bountyAmount: '',
                type: '',
            })
        } else {
            this.props.handlePut(this.state, this.props.bountiesInfo._id)
            this.props.toggle()
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'bounty-submit' : 'edit-bounty'} >
                <label htmlFor="firstName">First Name: 
                    <input placeholder='First Name' className='input1' onChange={this.handleChange} value={this.state.firstName} name='firstName' type="text"/>
                </label>
                <label htmlFor="lastName">Last Name: 
                    <input placeholder='Last Name' onChange={this.handleChange} value={this.state.lastName} name='lastName' type="text"/>
                </label>
                <label htmlFor="type">Type: 
                    <input placeholder='Type' onChange={this.handleChange} value={this.state.type} name='type' type="text"/>
                </label>
                <label htmlFor="bountyAmount">Bounty Value: 
                    <input placeholder='Bounty Value' onChange={this.handleChange} value={this.state.bountyAmount} name='bountyAmount' type="text"/>
                </label>
                <button>{this.props.button}</button>
            </form>
        )
    }
}

export default withBounty(BountyForm)