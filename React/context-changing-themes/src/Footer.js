import React from 'react'
import {withProvider} from './ThemeProvider'

const Footer = (props) => {
    return(
        <div className={props.on ? 'lightFooter' : 'darkFooter'}>
            <p>This is a footer</p>
        </div>
    )
}

export default withProvider(Footer)