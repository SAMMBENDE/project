// Handling all of the state that we shall receive from the backend

import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = {products: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,  // WAIT UNTIL THIS VALUE = FALSE BEFORE DISPLAYING
                products: [],
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,  // ALREADY GOT THE PRODUCTS 
                products: action.payload,   // FROM BACKEND I RECIEVE AN ARRAY, THEN I JUST POPULATE THE PRODUCT WITH IT     
            };
        case actionTypes.GET_PRODUCTS_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
   }
};

// WHEN VIEWING A PRODUCT 
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case actionTypes.GET_PRODUCTS_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };        
        default: 
        return state;    
    };
};
export default getProductsReducer;