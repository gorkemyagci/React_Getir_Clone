import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function ProductItem({product}) {
  return (
    <div className='bg-white flex flex-col items-center relative text-center hover:cursor-pointer gap-y-1 p-3'>
      <button className='drop-shadow-md w-8 h-8 text-brand-color absolute top-3 right-3 bg-white rounded-lg border border-gray-200 flex items-center justify-center'>
        <AiOutlinePlus/>
      </button>
      <img src={product.image} alt={product.title} className="w-28 h-28"/>
      <div className='text-sm font-semibold text-brand-color'>{product.price}</div>
      <div className='text-sm font-semibold text-black'>{product.title}</div>
      <div className='text-sm font-semibold text-gray-400'>{product.alt}</div>
    </div>
  )
}

export default ProductItem;
