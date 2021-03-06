import React from 'react';
import './Footer.css'
import logo from '../../resources/logo.png'
const FooterLower = () => {
    return (
        <div className="footer">
          <div className='row'>
          <div className="col-md-4">
             <img style={{width:'40%',marginTop:'15%'}} src={logo} alt=""/>
          </div>
          
           <div className="col-md-8">
           <div className="row">
           <div className="col-md-3">
                   
               </div>
               <div className="col-md-3">
                  
               </div>
               <div className="col-md-3" style={{color:'white', marginTop:'5%'}} >
                   About online food <br/>
                   Read our blog <br/>
                   Sign up to deliver <br/>
                   Add you resturant 
               </div>
               <div className="col-md-3" style={{color:'white', marginTop:'5%'}} >
                   Get help <br/>
                   Read FAQs <br/>
                   View all cities <br/>
                   Resturants near me

               </div>
               </div>
           </div>
           </div>
           <div className="row">
               <div className="col-md-6" style={{marginTop:"5%", padding:'25px' }} >
                   <h5>coppyright@2020 online food </h5>
               </div>
               <div className="col-md-6"style={{color:'white', marginTop:'5%', padding:'25px' }}>
                  <h5>
                 <span className='ms-5' > privacy policy </span>
                  <span className='ms-5'> terms of use</span>
                  <span className='ms-5'> pricing</span>
                  </h5>
               </div>
           </div>
        </div>
    );
};

export default FooterLower;