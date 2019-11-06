import React from 'react'
import {withProvider} from './ThemeProvider'

const Body = (props) => {
    return(
        <div className={props.on ? 'lightBody' : 'darkBody'}>
            <h1>Click the button to toggle the {props.theme} theme.</h1>
            <button onClick={props.toggle} >Toggle Theme</button>
        </div>
    )
}

export default withProvider(Body)