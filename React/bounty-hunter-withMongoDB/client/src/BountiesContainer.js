import React, {Component} from 'react'
import Bounty from './Bounty'
import { withBounty } from './BountyProvider'

class BountiesContainer extends Component {
    componentDidMount() {
        this.props.handleGet()
      }

    render() {
        const mappedBounties = this.props.bounties.map(bounty => (<Bounty key={bounty._id} bountiesInfo={bounty} firstName={bounty.firstName} lastName={bounty.lastName} living={bounty.living} bountyAmount={bounty.bountyAmount} type={bounty.type} _id={bounty._id} />))
        return(
            <div className='bountiesContainer'>
                {mappedBounties}
            </div>
        )
    }
}

export default withBounty(BountiesContainer)