 import React from 'react';
import { BreakfastFood } from '../../../resources/Fakedata';
import Breakfast from '../../Breakfast/Breakfast';


const BreakFoods = () => {
    return (
        <div className='row'>
           {
               BreakfastFood.map(breakfast => <Breakfast breakfast = {breakfast} key={breakfast.id}></Breakfast> )
           }
        </div>
    );
};

export default BreakFoods;