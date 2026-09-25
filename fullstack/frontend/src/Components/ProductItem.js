import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import IconList from './IconList'
import setCurrentProduct from '../actions/setCurrentProduct'

function ProductItem({ product = {}, showActions = true }) {
    const dispatch = useDispatch()
    const {image, name = 'Product', price, rating = 5, sale = true} = product
    const handleDetails = () => dispatch(setCurrentProduct(product))
  return (
    <article className='product-card h-100'>
        <div className = "product-image-wrap">
            {sale && <span className='product-sale'>Sale</span>}
            <Link to={`/details/${product.id}`} onClick={handleDetails} aria-label={`View ${name} details`}>
                <img src={image} alt={name} className='product-image'/>
            </Link>
        
            {showActions && (
                <div className='product-actions'>
                    <IconList product={product}/>
                </div>
            )}
        </div>
        <div className='product-info'>
            <Link to={`/details/${product.id}`} onClick={handleDetails} className='product-name-link'>
                <h3 className='product-name'>{name}</h3>
            </Link>
            <div className='product-rating' aria-label={`${rating} out of 5 stars`}>
                {'★'.repeat(Math.max(0, Math.min(5, rating)))}
            </div>
                {price !== undefined && <p className='product-price'>Rs. {price} </p> }
        </div>
    
    </article>
  )
}

export default ProductItem