import React, { useState } from 'react'
import ProductItem from './ProductItem'


export const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=700&q=85'
    }
]   
export const men_products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85'
    }
] 
export const women_products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85'
    }
] 
export const kids_products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca8bf?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85'
    }
] 
export const beauty_products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=85'
    }
] 
export const living_products = [
    {
        id: 1,
        name: 'Product 1',
        price: 109.95,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 22.3,
        rating: 3,
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 55.99,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        rating: 2,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=85'
    }
] 

export const accessories_products = [
    {
        id: 1,
        name: 'Leather Crossbody Bag',
        price: 1299,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Classic Sunglasses',
        price: 899,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Minimal Watch',
        price: 1899,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Everyday Tote',
        price: 999,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85'
    }
]

export const footwear_products = [
    {
        id: 1,
        name: 'White Everyday Sneakers',
        price: 2499,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 2,
        name: 'Classic Leather Loafers',
        price: 2199,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1614252369475-531eca835eb1?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 3,
        name: 'Sport Running Shoes',
        price: 2999,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85'
    },
    {
        id: 4,
        name: 'Strappy Summer Sandals',
        price: 1199,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85'
    }
]

function ProductSection({title = 'Products', products = [], ...handlers}) {
    const [sortBy, setSortBy] = useState('featured')
    const sortedProducts = [...products].sort((firstProduct, secondProduct) => {
        if (sortBy === 'price-low') return firstProduct.price - secondProduct.price
        if (sortBy === 'price-high') return secondProduct.price - firstProduct.price
        if (sortBy === 'rating') return secondProduct.rating - firstProduct.rating
        return 0
    })

  return (
    <section className='product-section' aria-labelledby='product-section-title'>
            <div className="collection-header">
                <div>
                    <p className="collection-eyebrow">Vastra / Collection</p>
                    <h2 id='product-section-title' className="product-section-title">{title}</h2>
                    <p className="collection-description"> 
                        Explore styles selected for your everyday wardrobe.</p>
                </div>
                <div className="collection-tools">
                    <span>{products.length} items</span>
                    <label htmlFor="product-sort">Sort by</label>
                    <select id="product-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
      <div className='row g-4'>
                {sortedProducts.map((product, index) => (
            <div className='col-12 col-sm-6 col-lg-3' key={product.id ?? product.name ?? index}>
                <ProductItem product={product} {...handlers} />
            </div>
        ))}
      </div>
    </section>
  )
}

export default ProductSection