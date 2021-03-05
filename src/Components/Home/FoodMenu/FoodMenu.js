import React from 'react';
import Breakfast from '../../Breakfast/Breakfast';
import BreakFoods from './BreakFoods';

const FoodMenu = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-between">
                <h5 className='ms-4'>Brakfast</h5>
                <h5 className='ms-4'>Lunch</h5>
                <h5 className='ms-4'>Dinner</h5>
               <BreakFoods/>
            </div>
            
        </div>
    );
};

export default FoodMenu;