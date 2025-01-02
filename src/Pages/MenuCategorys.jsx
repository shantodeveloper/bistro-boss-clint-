import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategorys = ({ items, titel, coverimg }) => {
  return (
    <div className="pt-8">
      {titel && <Cover img={coverimg} titel={titel}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16 ">
        {items.map(menu => (
          <MenuItem key={menu.id} item={menu}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${titel}`}>
        <div className="card-actions w-[100px] mx-auto">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategorys;
