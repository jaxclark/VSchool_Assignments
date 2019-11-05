import React from 'react'

const HitList = (props) => {
    let {image, name} = props
    
    return(
        <div className='hitList'>
            <img src={image} alt='test'/>
            <div>{name}</div>
        </div>
    )
}

export default HitList;