import React from 'react';
import banner from '../images/banner-home.jpg';

const Banner = () => {
    return ( 
            <div className="banner-home">
                <div className="container-fluid">
                    <img className="img-fluid" src={banner} alt="" title="" />
                </div>
            </div>
    );
}

export default Banner;