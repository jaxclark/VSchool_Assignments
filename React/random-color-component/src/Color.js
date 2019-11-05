import React from 'react'

export default function Color(props){
    return(
        <div>
            <div className='color' style={{backgroundColor: '#' + props.color, margin: '50px'}}>Hex #: {props.color}</div>
        </div>
    )
}