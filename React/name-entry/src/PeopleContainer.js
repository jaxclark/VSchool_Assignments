import React from 'react'
import Person from './Person'

const PeopleContainer = (props) => {
    const mappedPeople = props.people.map((person, i) => <Person key={i + person.fullName}
                                                                name={person.fullName}
                                                                age={person.age}/>)
    return(
        <ol>
            {mappedPeople}
        </ol>
    )
}

export default PeopleContainer