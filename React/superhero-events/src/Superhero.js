import React from 'react'

const Superhero = (props) => {
        let {name, show, catchPhrase, image} = props

        const handleClick = () => {
            alert(catchPhrase)
        }

        return(
            <div onClick={handleClick} className='superhero'>
                <h1>{name}</h1>
                <h3>{show}</h3>
                <img src={image}/>
            </div>
        )
    
}

export default Superhero