import "./HomeScreen.css";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";


// Components
import Product from "../components/Product"

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    return (
        <div className="homescreen">
          <h2 className="homescreen__title">Plats Disponible</h2>

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
