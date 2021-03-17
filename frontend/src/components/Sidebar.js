import './Sidebar.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Sidebar = ({show, click}) => {
    const SidebarClass = ["sidebar"];

    if(show) {
        SidebarClass.push("show")
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number( item.qty), 0)
    };

    return (
        <div className={SidebarClass.join(" ")}>
         <ul className="sidebar__links" onClick={click}>
            <li>
                <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sidebar__cartbadge">{getCartCount()}</span>
                </span>
                </Link>
            </li>
            <li>
                <Link to="/">RESTO</Link>
            </li>
         </ul>
        </div>
    )
};

export default Sidebar;
