import React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banners from '../api/banners.json';
import Title from './ui/Title';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Campaigns() {

   function ArrowBack(props){
    const { className, style, onClick } = props;
    return (
      <button className={`${className} absolute -left-6 -translate-y-1/2`} onClick={onClick}>
        <IoIosArrowBack size={22} className="text-gray-400 -left-6 -translate-y-1/2"/>
      </button>
    );
   }

   function ArrowForward(props){
    const { className, style, onClick } = props;
    return (
       <button className={`${className} absolute text-gray-400 -right-6 top-1/2`} onClick={onClick}>
         <IoIosArrowForward size={22} className="text-gray-400 -right-6 -translate-y-1/2"/>
       </button>
    );
   }
    const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  },[])

  
  const settings = {
    infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: true,
    nextArrow: <ArrowForward/>,
    prevArrow: <ArrowBack/>
  };
 
  return (
    <div className='container mx-auto py-8'>
      <Title>Kampanyalar</Title>
      <Slider {...settings} className="relative">
        {!Banners.length && 'Yükleniyor...'}
        {Banners.length && Banners.map((banner, index) => (
          <div key={index}>
            <picture className='block px-2'>
            <img src={banner.image} className="rounded-lg"/>
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Campaigns;