import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

const Cartpage = () => {
  const cart_store = useSelector((store) => store.cartStore);
  const cart_items = cart_store.cart_items;
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <table className="table mt-5 w-75 p-5 m-auto text-center table-bordered">
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Product Image</td>
            <td> Product info</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {cart_items.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.image} alt={item.title} style = {{height: "100px"}} />
                </td>
                <td>
                    <h5>{item.title}</h5>
                    <h5>$ {item.price}</h5>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch({type:"REMOVE FROM CART", payload: item.id})
                    }}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Cartpage;
