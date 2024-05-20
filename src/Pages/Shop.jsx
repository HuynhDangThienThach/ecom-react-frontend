import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import './CSS/Shop.css'
const Shop = () => {
  return (
    <div className='bg'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter/>
    </div>
  );
}

export default Shop
