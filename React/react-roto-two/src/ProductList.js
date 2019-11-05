import React from 'react'
import products from './products.json'
import {Link} from 'react-router-dom'

export default function ProductList () {
    const mappedProducts = products.map(product => <Link to={`/products/${product._id}`}>{product.name}</Link>)
    return(
        <div className='productList'>
            <h1>Products</h1>
            <div>{mappedProducts}</div>
        </div>
    )
}