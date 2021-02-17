import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteOneProduct, removeFromCart, addToCart } from '../../store/actions/cartActions'

const ShoppingCartProduct = ({ product }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(deleteOneProduct(product._id))
    }

    const remove = () => {
        dispatch(removeFromCart(product._id))
    }

    const add = () => {
        dispatch(addToCart(product))
    }

    const style = {
        width: '90px'
    }

    
    return (
        <div>

           

            <div className="cart-item">
                <div className="p-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img style={style} src={product.imageLink} alt="/#" className="img-fluid img-width" />
                        <div>
                            <div>
                                <strong>{product.name}</strong>
                            </div>
                            <div><small>{product.quantity} x {product.price} SEK</small></div>
                        </div>
                    </div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                        {/*/Här ska onClick köras med increment och decrement*/}
                        <button onClick={remove} type="button" className="btn btn-grey px-3 ">-</button>
                        <button onClick={add} type="button" className="btn btn-grey px-3">+</button>
                    </div>

                    <div><button className="btn btn-sm px-3" onClick={deleteProduct}><i className="fas fa-trash"></i></button></div>
                </div>
                <div className="dropdown-divider"></div>
            </div>

        </div>
    );
}

export default ShoppingCartProduct;

