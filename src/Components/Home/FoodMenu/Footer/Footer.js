import React from 'react';
import image from '../../../../resources/Image/adult-blur-blurred-background-687824.png'
import image2 from '../../../../resources/Image/chef-cook-food-33614.png'
import image3 from '../../../../resources/Image/architecture-building-city-2047397.png'
const Footer = () => {
    return (
        <div className="row ms-5">
            <h2 className="ms-5 mt-5" >Why you choose us</h2>
            <h5 className="ms-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Repellat asperiores adipisci quasi ratione dignissimos itaque, <br/>
                similique maiores natus voluptatibus exercitationem <br/>
                assumenda deserunt odit nemo! 
                Error eos perferendis placeat odit odio!</h5>
            <div className="col-md-4 mt-5 ">
             <img style={{width:"300px"}}  src={image} alt=""/>
            </div>

            <div className="col-md-4 mt-5">
            
            <img style={{width:"300px"}}  src={image2} alt=""/>
        </div>

        <div className="col-md-4 mt-5">
           
            
            <img style={{width:"300px"}}  src={image3} alt=""/>
        </div>
        </div>
        
    );
};

export default Footer;