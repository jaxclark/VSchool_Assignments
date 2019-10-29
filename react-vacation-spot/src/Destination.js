import React from 'react'

const Destination = (props) => {
    let {place, price, timeToGo} = props
    let color = ''
    if(timeToGo === 'Spring'){
        color = 'rgb(146, 214, 146)'
    } else if(timeToGo === 'Summer'){
        color = 'rgb(255, 216, 89)'
    } else if(timeToGo === 'Fall'){
        color = 'rgb(255, 127, 67)'
    } else {
        color = 'rgb(174, 219, 255)'
    }

    let money = ''
    if(price < 200){
        money = '$'
    } else if(price > 200 && price < 1000){
        money = '$$'
    } else {
        money = '$$$'
    }
    return (
        <div className='destinations' style={{backgroundColor:color}}>
            <h2>{money}</h2>
            <h1>{place}</h1>
            <h2>${price}</h2>
            <h2>{timeToGo}</h2>
        </div>
    )
}

export default Destination

//can also write it this way, but for larger apps, having to call a function everytime 
// {(function(){
//     if(timeToGo === 'Spring'){
//         return <h2 style ={{backgroundColor: 'green'}}>{timeToGo}</h2>
//     } else if(timeToGo === 'Summer'){
//         return <h2 style ={{backgroundColor: 'red'}}>{timeToGo}</h2>
//     } else if(timeToGo === 'Fall'){
//         return <h2 style ={{backgroundColor: 'burlywood'}}>{timeToGo}</h2>
//     } else {
//         return <h2 style ={{backgroundColor: 'blue'}}>{timeToGo}</h2>
//     }
// })()