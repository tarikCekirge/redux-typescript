import { type CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispacth, useCartSElector } from "../store/hooks"

const CartItems = () => {
    const cartItems = useCartSElector(state => state.cart.items);
    const dispatch = useCartDispacth()

    const totalPrice = cartItems.reduce((val, item) => val + item.price * item.quantity, 0)
    const formattedTotalPrice = totalPrice.toFixed(2)
    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id))
    }
    const handleAddToCart = (item: CartItem) => {
        dispatch(addToCart(item))
    }
    return (
        <div id="cart">
            {cartItems.length === 0 && <p>No items in cart!</p>}

            {
                cartItems.length > 0 &&
                <ul id="cart-items">
                    {cartItems.map((item) => {
                        const formattedPrice = `$${item.price.toFixed(2)}`;

                        return (
                            <li key={item.id}>
                                <div>
                                    <span>{item.title}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleRemoveFromCart(item.id)}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleAddToCart(item)}>+</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            }

            <p id="cart-total-price">
                Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>


        </div>
    )
}

export default CartItems