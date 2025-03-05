import React, { useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleCheckout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/checkout', { address, paymentMethod });
            alert('Checkout successful!');
        } catch (error) {
            console.error('Error during checkout', error);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Payment Method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
