import React from 'react'

export default function Badge (props){
    return(
        <div className="badge">
            <div className="badgeDiv">Badge:</div>
            <div className='badgeInfo'>
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Phone: {props.phone}</p>
                <p>Place of Birth: {props.birth}</p>
                <p>Favorite Food: {props.food}</p>
                <p>Email: {props.email}</p>
                <div className='summaryStyle'>{props.summary}</div>
            </div>
            
            <div>{props.summary}</div>
        </div>
    )
}