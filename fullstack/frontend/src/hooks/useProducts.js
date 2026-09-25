import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api';

const normalizeProduct = (product, fallbackCategory = 'featured') => ({
  ...product,
  id: product._id || product.id || product.name,
  name: product.name || product.title || 'Product',
  price: Number(product.price ?? 0),
  rating: Number(product.rating ?? 0),
  image: product.image || 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85',
  category: product.category || fallbackCategory,
  description: product.description || '',
});

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        const allProducts = Array.isArray(data.products) ? data.products : [];

        const filteredProducts = category
          ? allProducts.filter((product) => {
              const productCategory = String(product.category || '').toLowerCase();
              const targetCategory = String(category).toLowerCase();
              return productCategory === targetCategory;
            })
          : allProducts;

        if (isMounted) {
          setProducts(filteredProducts.map((product) => normalizeProduct(product, category || 'featured')));
        }
      } catch (error) {
        if (isMounted) {
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { products, loading };
}
