import { createPortal } from "react-dom"
import CartItems from "./CartItems"

type CardProps = {
    onClose: () => void
}
const Cart = ({ onClose }: CardProps) => {
    return createPortal(
        <>
            <div className="cart-backdrop">
                <dialog id="Card-modal" open>
                    <h2>Your Cart</h2>
                    <CartItems />
                    <p id="cart-actions">
                        <button onClick={onClose}>Close</button>
                    </p>
                </dialog>
            </div>
        </>,
        document.getElementById('modal')!
    )
}

export default Cart