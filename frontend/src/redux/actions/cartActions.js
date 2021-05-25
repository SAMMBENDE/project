// MAKING HTTP REQUEST TO MY BACKEND TO GET THE PRODUCT DETAILS AND ADD TO CART
import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';  

// REDUX-THUNK WILL HELP IN DISPATCH AND GETSTATE
// DESTRUCTURING THE DATA OUT OF AXIOS REQUEST
//AND MAKE AN API REQUEST TO MY BACKEND
// SINCE IN THE REDUCER, I AM EXPECTING AN ITEM, 
// payload =Item comming from db
// SAVING THE CART TO LOCAL STORAGE
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          product: data._id,
          name: data.name,
          imageUrl: data.imageUrl,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        },
      });

      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};