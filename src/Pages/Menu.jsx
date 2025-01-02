import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import coverimg from '../assets/menu/banner3.jpg';
import desssertimg from '../assets/menu/dessert-bg.jpeg';

import pizzaimg from '../assets/menu/pizza-bg.jpg';

import saladimg from '../assets/menu/salad-bg.jpg';
import soupimg from '../assets/menu/soup-bg.jpg';
import useMenu from '../Hooks/useMenu';
import SectionTitel from '../Shared/SectionTitel';
import MenuCategorys from './MenuCategorys';

const Menu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter(item => item.category === 'dessert');
  const soup = menus.filter(item => item.category === 'soup');
  const salad = menus.filter(item => item.category === 'salad');
  const pizza = menus.filter(item => item.category === 'pizza');
  const offered = menus.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Q Bistro | Menu</title>
      </Helmet>
      <Cover img={coverimg} titel="Our menu"></Cover>

      <SectionTitel
        subHeading="Dont miss"
        heading="Todays Offer"
      ></SectionTitel>
      {/* offerd menu items  */}
      <MenuCategorys items={offered}></MenuCategorys>
      {/* dessert menu items  */}
      <MenuCategorys
        items={desserts}
        titel="Dessert"
        coverimg={desssertimg}
      ></MenuCategorys>

      <MenuCategorys
        items={pizza}
        titel="Pizza"
        coverimg={pizzaimg}
      ></MenuCategorys>
      <MenuCategorys
        items={salad}
        titel="Salad"
        coverimg={saladimg}
      ></MenuCategorys>
      <MenuCategorys
        items={soup}
        titel="Soup"
        coverimg={soupimg}
      ></MenuCategorys>
    </div>
  );
};

export default Menu;
