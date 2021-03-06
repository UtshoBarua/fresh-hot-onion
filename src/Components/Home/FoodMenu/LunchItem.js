import React from 'react';
import { LunchFood } from '../../../resources/Fakedata';
import Lunch from './Lunch';

const LunchItem = () => {
    console.log(LunchFood)
    return (
        <div className="row" >
            {
                LunchFood.map(lunch => <Lunch lunch={lunch} ></Lunch>  )
            }
        </div>
    );
};

export default LunchItem;