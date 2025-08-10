import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import SalesPromotion from '../components/SalesPromotion';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <FeaturedProducts />
            <Categories />
            <PopularProducts />
            <SalesPromotion />
            <WhyChooseUs />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
