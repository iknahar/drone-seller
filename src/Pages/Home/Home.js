import React from 'react';
import Hero from './Hero';
import Footer from '../Shared/Footer/Footer';
import FeaturedProduct from './FeaturedProduct';


const Home = () => {
    return (
      <div> 
        <Hero></Hero>
        <FeaturedProduct></FeaturedProduct>
        <Footer></Footer>
      </div>
    );
};

export default Home;