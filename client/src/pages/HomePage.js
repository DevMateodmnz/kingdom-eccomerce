// client/src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryDisplay from '../components/home/CategoryDisplay';
import { listFeaturedProducts } from '../redux/actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const { loading, error, products: featuredProducts } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listFeaturedProducts());
  }, [dispatch]);

  return (
    <div>
      <HeroBanner />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <FeaturedProducts products={featuredProducts} />
          )}
        </div>
      </section>
      
      <CategoryDisplay />
    </div>
  );
};

export default HomePage;