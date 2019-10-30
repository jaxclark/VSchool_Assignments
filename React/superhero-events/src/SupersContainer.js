import React from 'react'
import Superhero from './Superhero'
import dataInfo from './superheroes.json'

const SupersContainer = () => {
    const mappedSupers = dataInfo.map(((hero, i) => <Superhero key={i + hero.name}
                                                            name={hero.name}
                                                            show={hero.show}
                                                            catchPhrase={hero.catchPhrase}
                                                            image={hero.imageName}
                                                            /> ))
    return(
        <div className='container'>
            {mappedSupers}
        </div>
    )
}

export default SupersContainer