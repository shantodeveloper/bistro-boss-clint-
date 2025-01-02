import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const FoodCart = ({ items }) => {
  const { name, image, price, recipe, _id } = items;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axsiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddCart = () => {
    if (user && user.email) {
      //send user food cart data base
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axsiosSecure.post('/carts', cartItem).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: 'plz login now then order',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login now!',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 absolute right-0 text-white p-2 mr-3 mt-3 rounded-lg">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div onClick={handleAddCart} className="card-actions justify-end">
            <button className="btn btn-primary">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
