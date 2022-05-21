import React, { useState } from 'react';
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

function HeroSection() {

  const [selected, setSelected] = useState('TR');

  const flags = {
    US: '+1',
    TR: '+90',
    DE: '49',
    IT: '7',
  }

  const settings = {
    infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: false,
  };
  

  return (
    <div className='h-[500px] bg-purple-500 relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
    <Slider {...settings}>
      <div>
        <img className='h-[500px] w-full object-cover' src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg' alt='Getir'/>
      </div>
      <div>
        <img className='h-[500px] w-full object-cover' src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg' alt='Getir'/>
      </div>
    </Slider>
    <div className='flex justify-between items-center container px-9 h-full absolute top-0 z-20 left-1/2 -translate-x-1/2'>
      <div className='scale-110'>
     <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'/>
     <h3 className='font-semibold text-white text-4xl mt-8'>Dakikalar içinde <br/> kapınızda </h3>
     </div>
    <div className='w-[400px] rounded-lg p-6 bg-gray-50'>
      <h4 className='text-brand-color text-base font-semibold text-center mb-4'>Giriş yap veya kayıt ol</h4>
      <div className='flex gap-x-3'>
        <ReactFlagsSelect
        countries={Object.keys(flags)}
        selected={selected}
        onSelect={code => setSelected(code)}
        customLabels={flags}
        className="flags-select"
        />
        <label className='flex-1 relative'>
          <input required type="text" className='rounded peer px-4 h-14 valid:pt-3 border-2 border-gray-200 outline-none focus:pt-3 focus:border-brand-color hover:border-brand-color transition-colors'/>
          <span className='absolute inset-0 px-4 text-sm flex items-center text-gray-600 transition-all peer-focus:h-7 peer-focus:text-xs peer-focus:text-brand-color peer-valid:h-7 peer-valid:text-xs peer-valid:text-brand-color'>Telefon Numarası</span>
        </label>
      </div>
      <button className='w-full h-12 p-3 rounded-lg bg-button-brand-yellow text-brand-color font-semibold mt-2 transition-all hover:bg-brand-color hover:text-button-brand-yellow'>Telefon numarası ile devam et</button>
    </div>
    </div>
  </div>
  )
}

export default HeroSection;