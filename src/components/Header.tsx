import { useState } from "react"
import Cart from "./Cart";
import { useCartSElector } from "../store/hooks";

const Header = () => {
    const [cartIsVisible, setCartIsVisible] = useState(false);
    const cartQuantity = useCartSElector((state) => state.cart.items.reduce((val, item) => val + item.quantity, 0))

    const handleOpenCartClick = () => {
        setCartIsVisible(true)
    }

    const handleCloseCartClick = () => {
        setCartIsVisible(false);

    }
    return (
        <>
            {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Redux</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    )
}

export default Header