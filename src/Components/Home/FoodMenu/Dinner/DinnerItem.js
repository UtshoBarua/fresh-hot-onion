import React from 'react';
import { DinnerFood } from '../../../../resources/Fakedata';
import Dinner from './Dinner';

const DinnerItem = () => {
    return (
        <div className='row'>
            {
                DinnerFood.map(dinner => <Dinner dinner={dinner} ></Dinner> )
            }
        </div>
    );
};

export default DinnerItem;