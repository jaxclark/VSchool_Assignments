import React, {Component} from 'react'
import BountyForm from './BountyForm'
import { withBounty } from './BountyProvider'

class Bounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            living: props.living,
            bountyAmount: props.bountyAmount,
            type: props.type,
            toggle: true,
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {toggle: !prev.toggle}
        })
    }

    checkBox = e => {
        console.log(this.state)
        // this.setState({living: e.target.checked})
        this.props.handlePut({living: !e.target.checked}, this.props._id)
        console.log(e.target.checked)
    }

    render() {
        return(
            <div>
                {this.state.toggle ?
                    <div className='bounty'>
                        <h1>{this.props.firstName} {this.props.lastName}</h1>
                        <h3>{this.props.type}</h3>
                        <h3>Credits: {this.props.bountyAmount}</h3>
                        <h3>{this.props.living ? 'Alive' : 'Dead'}</h3>
                        <label htmlFor="checkbox">Completed? 
                            <input onChange={this.checkBox} checked={this.props.living ? false : true} type="checkbox"/>
                        </label>
                        <button onClick={this.toggle}>Edit</button>
                        <button onClick={() => this.props.handleDelete(this.props._id)}>X</button>
                    </div>
                :
                    <BountyForm button='Save' type='update' {...this.props.bountiesInfo} bountiesInfo={this.props.bountiesInfo} toggle={this.toggle}  />
                }
            </div>
        )
    }
}

export default withBounty(Bounty)