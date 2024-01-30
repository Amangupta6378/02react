import React from 'react'
import './ProductItem.css'
import Card from './Card'
import ProductDate from './ProductDate'

const ProductItem = (props) => {
    const title = props.title;
  return (
    <div>
        <Card>
            <ProductDate/>
            <div>
                <h2 className='heading'>{title}</h2>
            </div>
        </Card>
        
    </div>
  )
}

export default ProductItem