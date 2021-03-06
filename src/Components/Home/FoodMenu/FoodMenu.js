import React, {useState} from 'react';
import { LunchFood } from '../../../resources/Fakedata';
import Breakfast from '../../Breakfast/Breakfast';
import BreakFoods from './BreakFoods';
import DinnerItem from './Dinner/DinnerItem';
import Lunch from './Lunch';

import LunchItem from './LunchItem';



const FoodMenu = () => {
    const [menu, setMenu] = useState({
        Breakfast: true,
        lunch: false,
        dinner:false
    })
    const handleBreak = () => {
        const newMenu = {...menu}
        newMenu.Breakfast = true;
        newMenu.lunch = false;
        newMenu.dinner = false;
        setMenu(newMenu)
    }
const handleLuch = () => {
    const newMenu = {...menu}
    newMenu.Breakfast = false;
    newMenu.lunch = true;
    newMenu.dinner = false;
    setMenu(newMenu)
}
const handleDinner = () =>{
    const newMenu ={...menu}
    newMenu.Breakfast = false;
    newMenu.lunch = false;
    newMenu.dinner = true;
    setMenu(newMenu)

}
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="d-flex justify-content-between">
                    <h5 className='ms-4' onClick={handleBreak}>Breakfast</h5>
                    <h5 className='ms-4' onClick={handleLuch}>Lunch</h5>
                    <h5 className='ms-4'onClick={handleDinner} >Dinner</h5>
                </div>
            </div>
            {menu.Breakfast && <BreakFoods/>}
            {menu.lunch && <LunchItem></LunchItem>}
            {menu.dinner && <DinnerItem></DinnerItem>}
           

        </div>
    );
};

export default FoodMenu;