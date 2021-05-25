import './Product.css';
import {Link} from 'react-router-dom';

// EXTRACTING THE FOLLOWING 5 
// INSTEAD OF RENDERING THE HARDCODED VALUES I DESTRUCTURE
const Product = ({imageUrl, name, price, description, productid}) => {
    return (
        <div className="product">
            <img src={imageUrl}
                 alt={name}
            /> 
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">
                {description.substring(0, 100)}...  
                </p>
                <p className="info__price">€{price}</p>
                
                <Link to={`/product/${productid}`} className="info__button">
                    View
                </Link>
            </div>            
        </div>
    );
};

export default Product;
