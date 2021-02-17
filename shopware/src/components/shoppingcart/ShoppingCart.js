import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../store/actions/cartActions';
import ShoppingCartProduct from '../shoppingcart/ShoppingCartProduct'


const ShoppingCart = ({products}) => {

    const shoppingCart = useSelector(state => state.cart.shoppingCart)
    const shoppingCartTotal = useSelector(state => state.cart.shoppingCartTotal)

    const handleonClick = (e) => {
        e.stopPropagation();

    }
    
    const dispatch = useDispatch()

    const clear = () => {
        dispatch(clearCart(products))
    }

    return (

        

        <div>

            <div>

                 {

                    shoppingCart.length > 0 ?
                        shoppingCart.map((product) => {

                            return <ShoppingCartProduct product={product} key={product._id} />
                        })
                        :
                        <div className="cart-item">
                            <div className="p-2 d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center">
                                    Din kundvagn är tom.
                        </div>
                            </div>
                            <div className="dropdown-divider"></div>
                        </div>
                 }

            </div>


            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="ml-2">
                    <div className="total-price">
                        Totalt: <span className="ml-1">{shoppingCartTotal} SEK</span>
                    </div>
                    <small className="text-muted">inkl. moms</small>
                </div>
                <button onClick={clear} className="btn btn-sm btn-danger" >Töm varukorgen</button>
                <button onClick={handleonClick} className="btn btn-sm btn-default" >Gå till Kassan</button>
            </div>

        </div>

    );
}

export default ShoppingCart;