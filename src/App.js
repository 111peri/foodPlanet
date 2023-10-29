import PageRoutes from "./routes/PageRoutes";
import {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./Layout/Header/Header";



//css
import './styles/styles.scss'
import * as PropTypes from "prop-types";



function ProductList(props) {
    return null;
}

ProductList.propTypes = {addToCart: PropTypes.func};

function App() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
  return (
    <div className="App">

        <Header cartItems={cart} />
    <ProductList addToCart={addToCart} />
    <Cart cartItems={cart} />

      <PageRoutes/>
    </div>
  );
}

export default App;
