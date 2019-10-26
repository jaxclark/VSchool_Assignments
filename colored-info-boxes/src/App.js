import React from 'react'
import Box from './Box'

const App = () => {
    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    }
    return(
        <div style={styles}>
            <Box bgColor='blue' title='One' subtitle='Blue' information='This box is blue'/>
            <Box bgColor='green' title='Two' subtitle='Green' information='This box is green'/>
            <Box bgColor='purple' title='Three' subtitle='Purple' information='This box is purple'/>
            <Box bgColor='grey' title='Four' subtitle='Grey' information='This box is grey'/>
            <Box bgColor='white' title='Five' subtitle='White' information='This box is white'/>
            <Box bgColor='orange' title='Six' subtitle='Orange' information='This box is orange'/>
            <Box bgColor='red' title='Seven' subtitle='Red' information='This box is red'/>
            <Box bgColor='yellow' title='Eight' subtitle='Yellow' information='This box is yellow'/>
            <Box bgColor='cyan' title='Nine' subtitle='Cyan' information='This box is cyan'/>
            <Box bgColor='black' color='white' borderColor='grey' title='Ten' subtitle='Black' information='This box is black'/>
        </div>
    )
}

export default App