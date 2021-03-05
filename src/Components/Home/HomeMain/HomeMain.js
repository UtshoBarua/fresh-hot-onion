import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import FoodMenu from '../FoodMenu/FoodMenu'
const HomeMain = () => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
            <FoodMenu/>
        </div>
    );
};

export default HomeMain;