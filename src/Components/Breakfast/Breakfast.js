import React from 'react';

const Breakfast = (props) => {
    const {id,picture, first_name, last_name} = props.breakfast;

    return (
        <div className="col-md-4" >
        <img style={{width:"40%"}} src={picture} alt=""/>
        <h4 style={{textAlign:"center"}} >{first_name}</h4>
        <h5 style={{textAlign:"center", color:"GrayText"}} >{last_name}</h5>
        <h3 style={{textAlign:"center"}}>${id}</h3>
        </div>
    );
};

export default Breakfast;