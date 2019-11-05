import React from 'react'
import Badge from './Badge'

const BadgeList = (props) => {
    const mappedInfo = props.badgesArr.map((data, i) => <Badge key={i + data.firstName}
                                                        firstName={data.firstName}
                                                        lastName={data.lastName}
                                                        email={data.email}
                                                        birth={data.birth}
                                                        phone={data.phone}
                                                        food={data.food}
                                                        summary={data.summary}
    /> )

    return(
        <div>
            {mappedInfo}
        </div>
    )
}

export default BadgeList