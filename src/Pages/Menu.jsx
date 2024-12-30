import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import coverimg from '../assets/menu/banner3.jpg';
import Menubar from '../Components/Menubar';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Q Bistro | Menu</title>
      </Helmet>
      <Cover img={coverimg} titel="Our menu"></Cover>
      <Menubar></Menubar>
      <Cover img={coverimg} titel="Our menu"></Cover>
      <Menubar></Menubar>
      <Cover img={coverimg} titel="Our menu"></Cover>
      <Menubar></Menubar>
    </div>
  );
};

export default Menu;
