'use client'
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div className='px-5 py-3 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600 hover:shadow-sm w-min rounded-lg shadow-lg shadow-slate-600
     '>
      <AddToCart />
    </div>
  )
}

export default ProductCard
