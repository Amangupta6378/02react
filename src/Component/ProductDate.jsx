import React from 'react'
import './ProductDate.css'

const ProductDate = (props) => {
    const Date = props.date;
    const Month = props.month;
    const Year = props.year;
  return (
    <div>
        <div>{Date}</div>
        <div>{Month}</div>
        <div>{Year}</div>
    </div>
  )
}

export default ProductDate