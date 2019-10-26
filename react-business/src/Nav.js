import React from 'react'

const Nav = () => {
    const styles = {
        'grid-column': '1/-1',
        'grid-row': '1/2',
        'justify-self': 'center',
        height: '60px',
        'align-self': 'center',
    }

    return (
        <div className='nav' style={styles}>
            Hello darkness my old friend
        </div>
    )
}

export default Nav