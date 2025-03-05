import React from 'react';

const CartItem = ({ item, onRemove }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
