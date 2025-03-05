import React from 'react';

const CartSummary = ({ items, total }) => {
    return (
        <div>
            <h2>Resumen del Carrito</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default CartSummary;
