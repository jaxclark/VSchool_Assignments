import React from 'react'

const Person = (props) => {
    let {name, age} = props
    return (
            <li>{name}</li>
    )
}

export default Person