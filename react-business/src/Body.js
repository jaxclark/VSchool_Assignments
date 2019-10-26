import React from 'react'

const Body = () => {
    const styles1 = {
        'justify-self': 'center',
        // 'text-align': 'center',
        'background-color': 'rgb(102, 205, 196)',
        'color': 'black',
        'grid-column': '1/-1',
        // 'grid-row': '2/3',
        padding: '30px',
        'margin-bottom': '600px'
    }
    const listStyle = {
    }
    const images = {
        margin: '20px'
    }
    return (
        <div className='body' style={styles1}>
            <ul style={listStyle}>
                <li>Sleep</li>
                <li>Eat</li>
                <li>Code</li>
                <li>Repeat</li>
            </ul>
            <img style={images} src="https://media1.giphy.com/media/3o7WTqo27pLRYxRtg4/source.gif" alt=""/>
        </div>
    )
}

export default Body