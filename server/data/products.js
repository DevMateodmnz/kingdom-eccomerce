// server/data/products.js
const products = [
    {
      name: 'Classic White T-Shirt',
      images: ['/images/products/tshirt-white.jpg'],
      description:
        'A classic white t-shirt made from 100% organic cotton. Lightweight, comfortable and perfect for everyday wear.',
      brand: 'The Kingdom',
      category: 'Clothing',
      subCategory: 'T-Shirts',
      price: 29.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      discount: 0,
      isFeatured: true,
      isNewArrival: false,
    },
    {
      name: 'Black Denim Jeans',
      images: ['/images/products/jeans-black.jpg'],
      description:
        'Premium black denim jeans with a modern slim fit. Made from high-quality denim with slight stretch for comfort.',
      brand: 'The Kingdom',
      category: 'Clothing',
      subCategory: 'Jeans',
      price: 89.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
      sizes: ['30', '32', '34', '36'],
      colors: ['Black'],
      discount: 10,
      isFeatured: true,
      isNewArrival: true,
    },
    {
      name: 'Brown Leather Jacket',
      images: ['/images/products/leather-jacket.jpg'],
      description: