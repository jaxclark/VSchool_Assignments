import React from 'react'
import Friend from './Friend'
import friendInfo from './friends.json'

const FriendList = () => {
    const mappedFriends = friendInfo.map(((friend, i) => <Friend key={i + friend.name}
                                                                    name={friend.name}
                                                                    age={friend.age}
                                                                    pets={friend.pets}
                                                                     />))
    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    }
    return(
        <div style={styles}>
            {mappedFriends}
        </div>
    )
}

export default FriendList