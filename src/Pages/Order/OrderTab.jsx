import React from 'react';
import FoodCart from '../../Components/FoodCart';

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {items.map(item => (
          <FoodCart key={item._id} items={item}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
