import { useState } from 'react';
import ordercoverimg from '../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={ordercoverimg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

// import { useState } from 'react';
// import ordercoverimg from '../../assets/shop/banner2.jpg';
// import Cover from '../../Shared/Cover';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import useMenu from '../../Hooks/useMenu';
// import OrderTab from './OrderTab';
// import { useParams } from 'react-router-dom';

// const Order = () => {
//   const categories = ['salad', 'pizza', 'soup ', 'dessert', 'drinks'];
//   const { category } = useParams();
//   console.log(category);
//   const initialIndex = categories.indexOf(category);
//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menus] = useMenu();

//   const desserts = menus.filter(item => item.category === 'dessert');
//   const soup = menus.filter(item => item.category === 'soup');
//   const salad = menus.filter(item => item.category === 'salad');
//   const pizza = menus.filter(item => item.category === 'pizza');
//   const drinks = menus.filter(item => item.category === 'drinks');
//   return (
//     <div>
//       <Cover titel={'Order Food'} img={ordercoverimg}></Cover>

//       <section className="mt-14">
//         <div className="">
//           <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
//             <TabList>
//               <Tab>salad</Tab>
//               <Tab>pizza</Tab>
//               <Tab>soup </Tab>
//               <Tab>dessert</Tab>
//               <Tab>drinks</Tab>
//             </TabList>
//             <TabPanel>
//               <OrderTab items={desserts}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={soup}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={salad}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={pizza}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={drinks}></OrderTab>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Order;
