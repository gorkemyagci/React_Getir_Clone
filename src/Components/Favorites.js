import React, { useEffect } from 'react';
import Title from './ui/Title';
import Products from '../api/products.json';
import { useState } from 'react';
import ProductItem from './ui/ProductItem';

function Favorites() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products);
  },[])

  return (
  <div className='container mx-auto'>
    <Title>Favoriler</Title>
    <div className='px-2 overflow-hidden rounded-lg grid grid-cols-8 gap-0.1'>
    {!Products.length && 'Yükleniyor....'}
    {Products.length && Products.map(product => <ProductItem product={product}/>)}
    </div>
  </div>
  )
}

export default Favorites;