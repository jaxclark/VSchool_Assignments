import React from 'react'
import Destination from './Destination'
import destinationInfo from './destinations.json'

const DestinationContainer = () => {
    const mappedDestinations = destinationInfo.map(((destination, i) => <Destination key={i + destination.place}
                                                                                    place={destination.place}
                                                                                    price={destination.price}
                                                                                    timeToGo={destination.timeToGo}
                                                                                     />))
    return(
        <div className='destination-container'>
            {mappedDestinations}
        </div>
    )
}


export default DestinationContainer