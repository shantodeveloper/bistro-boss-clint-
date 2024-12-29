import React, { useEffect, useState } from 'react';
import SectionTitel from '../Shared/SectionTitel';
import MenuItem from '../Shared/MenuItem';

const Menubar = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenus(popularItems);
      });
  }, []);

  return (
    <div>
      <section>
        <SectionTitel
          subHeading={'Check it out'}
          heading={' FROM OUR MENU '}
        ></SectionTitel>

        <div className="grid md:grid-cols-2 gap-10">
          {menus.map(menu => (
            <MenuItem key={menu.id} item={menu}></MenuItem>
          ))}
        </div>
        <button className="btn btn-outline  border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </section>
    </div>
  );
};

export default Menubar;
