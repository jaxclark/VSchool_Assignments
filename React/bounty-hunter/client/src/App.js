import React from 'react'
import BountiesContainer from './BountiesContainer'
import BountyForm from './BountyForm'
import { withBounty } from './BountyProvider'


const App = () => {
    return (
      <div className="app">
        <BountyForm button='Submit' formType='add'/>
        <BountiesContainer />
      </div>
    )
}

export default withBounty(App)