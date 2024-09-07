import React from 'react';
import DisplayProduct from './DisplayProduct';

const SingleProduct = ({items}) => {
    return (
        <div>
            <div class="h-screen py-6 bg-white flex items-end justify-end flex-wrap">
                {
                    items.map(item=><DisplayProduct key={item.id} item={item}>

                    </DisplayProduct>)
                }
            </div>
        </div>
    );
};

export default SingleProduct;