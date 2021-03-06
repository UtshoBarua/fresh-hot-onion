import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'
const HeaderMain = () => {
    return (
        <div className="Header">
           <div className="d-flex justify-content-center">
             <div className='mt-5'>
             <h1>Best Food Waiting for your belly</h1>
             <br/>
             <div className="d-flex justify-content-between" style={{backgroundColor:'white'}}>
                 <input type="text" className='search p-3   ' placeholder="Search Your Food"/>
                 <button className="btn btn-danger">Search</button>
             </div>
             </div>
           </div>
        </div>
    );
};

export default HeaderMain;