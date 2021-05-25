// Here we are just going to dispatch all our actions to get from the db

import  * as actionTypes from '../constants/productConstants';
import axios from 'axios';

// FIRST ACTION TO CALL WHEN YOU GET TO THE HOMEPAGE
export const getProducts = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  
      const { data } = await axios.get("/api/products");
  
      dispatch({
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: data,
      });      
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCTS_FAILURE,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
};

// GETTING PRODUCT DETAILS. 
// HERE I AM MAKING A REQUEST TO A SPECIFIC ENDPOINT
// THAT IS WHY I USE BACK TICS
// THE PRODUCT BY ID AS NOTED IN THE BACKEND ROUTE 
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/products/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAILURE,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
};

// WHEN SWITCHING BACK TO THE SCREEN, 
// I WANT TO FIRST REMOVE ALL OF THE STATE
// NOT AN ASYNC FUNCTION
export const removeProductDetails = () => (dispatch) => {
    dispatch({ 
        type: actionTypes.GET_PRODUCT_DETAILS_RESET 
    });
  };
    