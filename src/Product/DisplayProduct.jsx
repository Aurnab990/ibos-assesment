import React from 'react';
import { useCart } from '../Layouts/CartContext';

const DisplayProduct = ({item}) => {
    const {name,img,price,description,discount,old_price} = item;
    const {addToCart} = useCart();
    return (
        <div>
            
    
    <div class="bg-white w-72 h-full shadow-md rounded m-3">
      <div class="h-3/4 w-full">
        <img class="w-full h-full object-cover rounded-t" src={img} alt=""/>
      </div>
      
      <div class="w-full h-1/4 p-3">
        <a href="#" class=" hover:text-yellow-600 text-gray-700">
          <span class="text-lg font-semibold uppercase tracking-wide ">{name}</span>
        </a>
        <div className="flex gap-2 ml-5 mr-3 text-lg items-center justify-center mt-4 font-semibold">
    <h1 className="text-green-500">৳{price}</h1>
    <h1 className="text-gray-500 line-through">৳{old_price}</h1>
    <h1 className="text-xl">{discount}% <span className="font-bold text-red-700">OFF</span></h1>
</div>

        <p class="text-gray-600 text-sm leading-5 mt-1">{description}</p>
      </div>
      <div>
        <button onClick={()=>addToCart(item)} className="bg-black text-white text-lg font-bold w-full p-2 rounded-xl border-2 hover:bg-white hover:text-black">Add to cart</button>
      </div>
    </div>
    
  </div>
        
    );
};

export default DisplayProduct;