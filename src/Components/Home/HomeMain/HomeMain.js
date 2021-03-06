import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import FoodMenu from '../FoodMenu/FoodMenu'
import Footer from '../FoodMenu/Footer/Footer';
import Checkout from '../../Checkout/Checkout';
import FooterLower from '../../FooterLower/FooterLower';
const HomeMain = () => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
            <FoodMenu/>
            <Checkout/>
            <Footer/>
            <FooterLower/>
           
        </div>
    );
};

export default HomeMain;