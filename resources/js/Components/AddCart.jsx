import React from 'react';

function AddCart({ totalItems, totalAmount }) {
  return (
<div className="card mx-auto w-48 card-compact lg:w-48 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
      <div className="card-body">
        <h2 className="card-title">Total Items: {totalItems}</h2>
        <p>Total Amount: {totalAmount}</p>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}

export default AddCart;
