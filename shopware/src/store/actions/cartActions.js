import actiontypes from '../actiontypes'
// import axios from 'axios'

export const addToCart = (product) => {
    return {
        type: actiontypes().cart.add,
        product: product
    }
}

export const deleteOneProduct = (id) => {
    return {
        type: actiontypes().cart.deleteOneProduct,
        id: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: actiontypes().cart.remove,
        id: id
    }
}

export const clearCart = (products) => {
    return {
        type: actiontypes().cart.clear,
        products: products
        
    }
}

