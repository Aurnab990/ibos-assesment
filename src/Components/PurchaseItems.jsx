import React from 'react';
import './PurchaseItems.css'; // Import the CSS file for styling

const PurchaseItems = ({ subtotal, shipping, taxRate }) => {
    // Calculate estimated tax
    const estimatedTax = subtotal * taxRate;

    // Calculate total
    const total = subtotal + shipping + estimatedTax;

    return (
        <div className="purchase-container">
            <div className="purchase-summary">
                <h1 className="summary-header">Order Summary</h1>
                <div className="summary-details">
                    <div className="details-left">
                        <p className="detail-item">Subtotal: ৳{subtotal.toFixed(2)}</p>
                        <p className="detail-item">Shipping: Free</p>
                        <p className="detail-item">Estimated Tax: </p>
                        <p className="detail-item"><span className="mt-4">Total: ৳{total.toFixed(2)}</span></p>
                    </div>
                    
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};

export default PurchaseItems;
