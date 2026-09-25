


import React, { useEffect, useState } from 'react'
import ProductDetails from '../Components/ProductDetails'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { API_BASE_URL } from '../api'

const normalizeProduct = (product) => ({
  ...product,
  id: product._id || product.id,
  name: product.name || product.title || 'Product',
  price: Number(product.price || 0),
  rating: Number(product.rating || 0),
  image: product.image || '',
  description: product.description || '',
})

let Details = () => {
  const { id } = useParams()
  let product = useSelector((state) => 
    {
        return state.currentProduct.product})
  const [fetchedProduct, setFetchedProduct] = useState(null)
  const [loading, setLoading] = useState(Boolean(id && !product))

  useEffect(() => {
    if (!id || product) return undefined

    let isMounted = true
    fetch(`${API_BASE_URL}/products/${id}`)
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) throw new Error(data.message || 'Product not found')
        if (isMounted) setFetchedProduct(normalizeProduct(data.product))
      })
      .catch(() => {
        if (isMounted) setFetchedProduct(null)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id, product])

  const selectedProduct = product || fetchedProduct
  return (
    <>
            <div className='container-fluid'>
                <Navbar/> 
            </div>
            
            <div className='container'>
              {loading ? <div className='text-center py-5'><p>Loading product...</p></div> : selectedProduct ? <ProductDetails product={selectedProduct}/> : (
                <div className='text-center py-5'>
                  <h2>No product selected</h2>
                  <p>Choose a product from the store to see its details.</p>
                </div>
              )}
            </div>
    </>
  )
}

export default Details