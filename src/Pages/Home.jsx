import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Sologan from '../Components/Sologan';
import Menubar from '../Components/Menubar';
import Recomands from '../Components/Recomands';
import Featured from '../Components/Featured';
import Testimonials from '../Components/Testimonials ';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Sologan></Sologan>
      <Menubar></Menubar>
      <Recomands></Recomands>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
