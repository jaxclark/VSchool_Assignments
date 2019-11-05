import React from 'react'

export default function NewBadgesList (props){
    return(
        <ol className="newBadgesList">
            {(props.color % 2 ===0) ? <div style={{backgroundColor: 'blue', border: '1px solid blue'}} className="badgeDiv">Badge:</div> : <div style={{backgroundColor: 'red', border: '1px solid red'}} className="badgeDiv">Badge:</div> }
            <div className='badgeInfo'>
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Phone: {props.phone}</p>
                <p>Place of Birth: {props.birth}</p>
                <p>Favorite Food: {props.food}</p>
                <p>Email: {props.email}</p>
                <div className='summaryStyle'>{props.summary}</div>
            </div>
        </ol>
    )
}