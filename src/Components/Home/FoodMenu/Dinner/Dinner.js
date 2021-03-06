import React from 'react';

const Dinner = (props) => {
    const {id, first_name, last_name, picture} = props.dinner
    return (
        <div className="col-md-4">  
        <p>this is dinner</p>
            <div className="d-flex justify-content-center">
            <img style={{width: "40%"}} src={picture} alt=""/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h5>{first_name}</h5>
                    <h6>{last_name}</h6>
                    <h3>${id}</h3>
                </div>
            </div>
        </div>
    );
};

export default Dinner;