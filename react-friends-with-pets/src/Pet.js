import React from 'react'

const Pet = (props) => {
    let {name, breed} = props
    const styles = {
        border: '1px solid darkgrey',
        margin: '2px'
    }
    return (
        <div style={styles}>
            <h4 style={{color: 'yellowgreen'}}>{name}</h4>
            <h5 style={{color: 'yellow'}}>{breed}</h5>
        </div>
    )
}

export default Pet