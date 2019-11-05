import React from 'react'
import products from './products.json'

export default function Product (props) {
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id)

    let {name, price, description} = product
    return(
        <div>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <button onClick={() => props.history.push('/products')} >Back</button>
        </div>
    )
}