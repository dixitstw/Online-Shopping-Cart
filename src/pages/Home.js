import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'

const Home = () => {
    const dispatch = useDispatch()

  useEffect(()=> {
    fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then(data=>dispatch({type: "LOAD_DATA", payload:data}))
    .catch(err=>console.log(err))
  }, [])

    const item_store = useSelector(store =>store.itemStore)
    const items = item_store.items

    const addToCart= item => e =>{
      dispatch({
        type:"ADD_TO_CART",
        payload: item
      })
    }
    console.log(items)
  return (
    <>
    <Navbar/>
    <div class="row row-cols-1 row-cols-md-2 row-col-lg-3 row-col-xl-4 p-3 m-auto g-4 w-100 ">

     {
        items && items.map((item) =>{
        return <div class="col">
        <div class="card">
          <img src={item.image} class="card-img-top" alt="..." style={{height: "400px", width: "300px", display: "flex", justifyContent: "center"}}/>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <h5 class="card-price">${item.price}</h5>

            <p class="card-text">{item.description}</p>
            <h6>Rating:
              {item.rating && item.rating.rate &&
              <>
              {item.rating.rate}
              </>
        }
            </h6>
            <h6>Count in Stock:
              {item.rating.count}
            </h6>
            <button className='btn-btn-warning w-100' onClick={addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      </div>

        })
     }
     </div>
    </>
  )
}

export default Home