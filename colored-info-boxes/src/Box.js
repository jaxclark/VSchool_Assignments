import React from 'react'

const Box = (props) => {
    const styles ={
        backgroundColor: props.bgColor,
        color: props.color,
        height: '170px',
        width: '200px',
        textAlign: 'center',
        margin: '1%',
        boxSizing: 'border-box',
        border: '4px solid',
        borderColor: props.borderColor,
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Box