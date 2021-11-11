import React from 'react';
import Hero from './Hero';
import Footer from '../Shared/Footer/Footer';
import FeaturedProduct from './FeaturedProduct';
import SixProduct from './../Products/SixProduct';
import ShowReview from './ShowReview';


const Home = () => {

    return (
      <div> 
        <Hero></Hero>
        <SixProduct></SixProduct>
        <ShowReview></ShowReview>
        <FeaturedProduct></FeaturedProduct>
        <Footer></Footer>
      </div>
    );
};

export default Home;