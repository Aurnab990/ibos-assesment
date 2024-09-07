import React, { useState } from 'react';
import { useCart } from '../Layouts/CartContext';
import PurchaseItems from './PurchaseItems'; 
import './Cart.css'; 
import Navbar from '../Layouts/Navbar';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => ({ ...acc, [item.name]: 1 }), {})
    );

    const handleQuantityChange = (itemName, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemName]: Math.max(1, prevQuantities[itemName] + delta) 
        }));
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => {
            return total + item.price * quantities[item.name];
        }, 0);
    };

    const shippingCost = 0; 
    const taxRate = 0; 

    const calculateTotal = (subtotal) => {
        const tax = subtotal * taxRate;
        return subtotal + tax + shippingCost;
    };

    const subtotal = calculateSubtotal();
    const total = calculateTotal(subtotal);

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">

<div className="cart-container">
            <h1 className="cart-header">Your Cart</h1>
            {cart.length === 0 && <p className="empty-cart-message">Your cart is empty.</p>}
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        
                        <button
                            onClick={() => removeFromCart(item.name)}
                            className="delete-button"
                        >
                            &times;
                        </button>

                        
                        <div className="quantity-controls">
                            <button 
                                onClick={() => handleQuantityChange(item.name, -1)}
                                className="quantity-button"
                            >
                                -
                            </button>
                            <span className="quantity-display">{quantities[item.name]}</span>
                            <button 
                                onClick={() => handleQuantityChange(item.name, 1)}
                                className="quantity-button"
                            >
                                +
                            </button>
                        </div>

                        <img src={item.img} alt={item.name} className="cart-item-image" />

                        <div className="item-details">
                            <h2 className="item-name">{item.name}</h2>
                        </div>

                        <div className="item-price">
                            <span className="price">৳{item.price * quantities[item.name]}</span>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>



            <div>
            <PurchaseItems subtotal={subtotal} shipping={shippingCost} taxRate={taxRate} />

            </div>
        </div>
        </div>
    );
};

export default Cart;
