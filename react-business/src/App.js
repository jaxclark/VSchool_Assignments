import React from 'react'

import Nav from './Nav'
import Body from './Body'
import Footer from './Footer'

const App = () => {
    const styles = {
        'background-color': 'cadetblue',
        color: 'black',
        display: 'grid',
        'grid-template-columns': 'auto 600px auto',
        'grid-template-rows': 'auto',
    }
    return (
        
        <div className='app' style={styles}>
            <Nav />
            <Body />
            <Footer />
        </div>
    )
}

export default App