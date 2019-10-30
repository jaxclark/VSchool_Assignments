import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const petInfo = props.pets.map((pet) => <Pet name={pet.name}
                                                breed={pet.breed}/>)
    let {name, age} = props
    const styles = {
        backgroundColor: 'darkgreen',
        textAlign: 'center',
        border: '2px solid black',
    }
    return(
        <div style={styles}>
            <h1 style={{backgroundColor: 'dimgrey', color: 'white'}}>{name}</h1>
            <h2>{age}</h2>
            <div>
                {petInfo}
            </div>
        </div>
    )
}

export default Friend