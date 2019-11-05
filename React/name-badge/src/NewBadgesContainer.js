import React from 'react'
import NewBadgesList from './NewBadgesList'

const NewBadgesContainer = (props) => {
    const mappedBadges = props.badgesArr.map((data, i) => <NewBadgesList key={i + data.firstName}
                                                                        color={i}
                                                                        firstName={data.firstName}
                                                                        lastName={data.lastName}
                                                                        email={data.email}
                                                                        birth={data.birth}
                                                                        phone={data.phone}
                                                                        food={data.food}
                                                                        summary={data.summary}
    /> )

    return(
        <li className='listItem'>{mappedBadges}</li>
    )
}

export default NewBadgesContainer