import "./HomeScreen.css";
import {useEffect} from 'react';  // FINDING MY PRODUCTS FROM STORE 
import { useDispatch, useSelector } from "react-redux"; // TWO HOOKS For working with mapStateToProps & mapDispatchToProps


// Components
import Product from "../components/Product"

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {

  const dispatch = useDispatch();

  // GETTING PRODUCTS DATA
  const getProducts = useSelector((state) => state.getProducts);

  // DESTRUCTURING TO GET PRODUCTS [] 
  // but first check for loading and error B4 mapping through my products
  
  const { products, loading, error } = getProducts;


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    return (
        <div className="homescreen">
          <h2 className="homescreen__title">Plats Disponibles</h2>
          
          <div className="homescreen__products"> 
              
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
              <Product 
              key={product._id}
              productid={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              description={product.description}
              price={product.price}
              />
            )) }
          </div>
        </div>
    );
};

export default HomeScreen;


// the exact amount of products in db appears on screen afetr mapping
// i pass the correct values in component Product.js so al values are same on screen aswell
// then each individual item loads seperately with corresponding values