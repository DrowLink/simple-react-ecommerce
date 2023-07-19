import React from 'react'
import { PRODUCTS } from "../../products.js"
import { Product } from './product.jsx'
import "./shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1> DrowLink Shop </h1>
        </div>
        <div className="products">
            {PRODUCTS.map( (products) => { 
                return <Product data={products}/>
            })}
        </div>
    </div>
  )
}
